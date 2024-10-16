import fs from "fs";
import path from "path";
import { MarkdownFile } from "@/types/types";

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
      // Recursively gather files from subdirectories
      getAllMarkdownFiles(filePath, fileList);
    } else if (path.extname(file) === ".md") {
      fileList.push(filePath); // Add markdown files to the list
    }
  });

  return fileList;
}

export function getDocs() {
  const markdownDir = path.join(process.cwd(), "markdowns");
  const files = getAllMarkdownFiles(markdownDir);
  console.log(files);

  const markdownFiles: MarkdownFile[] = files.map((filePath) => {
    
    const content = fs.readFileSync(filePath, "utf-8");
    const stats = fs.statSync(filePath);
    const fileName = path.basename(filePath)
    const titleFromH1 = extractTitleFromMarkdown(content);
    const title =
      (titleFromH1 || fileName.replace(/\.md$/, "")).split("\\").at(-1) ?? "";

    const slug = toSlug(title);
    const relativePath = path.relative(markdownDir, filePath); // Get relative path to markdownDir
    const category = path.dirname(relativePath) === '.' ? 'root' : path.dirname(relativePath);


    return {
      id: slug,
      filename:fileName,
      category,
      title,
      content,
      createdAt: stats.birthtime.toISOString(),
      updatedAt: stats.mtime.toISOString(),
    };
  });

  return markdownFiles;
}
