import { MarkdownFile } from "@/types/types";
import fs from "fs";
import path from "path";

const extractTitleFromMarkdown = (content: string): string => {
  const match = content.match(/^#\s+(.*)/m);
  return match ? match[1].trim() : "";
};

const toSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
    .replace(/--+/g, "-");
};

function getAllMarkdownFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllMarkdownFiles(filePath, fileList);
    } else if (path.extname(file) === ".md") {
      fileList.push(filePath);
    }
  });

  return fileList;
}

export function getDocs(): MarkdownFile[] {
  const markdownDir = path.join(process.cwd(), "markdowns");
  const files = getAllMarkdownFiles(markdownDir);

  const markdownFiles: MarkdownFile[] = [];

  files.forEach((filePath) => {
    const content = fs.readFileSync(filePath, "utf-8");
    const stats = fs.statSync(filePath);
    const fileName = path.basename(filePath);
    const titleFromH1 = extractTitleFromMarkdown(content);
    const title =
      (titleFromH1 || fileName.replace(/\.md$/, "")).split("\\").at(-1) ?? "";

    const slug = toSlug(title);
    const relativePath = path.relative(markdownDir, filePath);
    const category = path.dirname(relativePath) === '.' ? null : path.dirname(relativePath);

    // Find the category in the markdownFiles array
    let categoryEntry = markdownFiles.find(entry => entry.category === category);

    // If category doesn't exist, create it
    if (!categoryEntry) {
      categoryEntry = { category, data: [] };
      markdownFiles.push(categoryEntry);
    }

    // Push the data into the corresponding category
    categoryEntry.data.push({
      id: slug,
      filename: fileName,
      title,
      content,
      createdAt: stats.birthtime.toISOString(),
      updatedAt: stats.mtime.toISOString(),
    });
  });

  return markdownFiles;
}
