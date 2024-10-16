
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

export async function getDocs() {
    const markdownDir = path.join(process.cwd(), "markdowns");
    const files = fs.readdirSync(markdownDir);

    const markdownFiles: MarkdownFile[] = files.map((filename) => {
        const filePath = path.join(markdownDir, filename);
        const content = fs.readFileSync(filePath, "utf-8");
        const stats = fs.statSync(filePath);

        const titleFromH1 = extractTitleFromMarkdown(content);
        const title = titleFromH1 || filename.replace(/\.md$/, "");

        const slug = toSlug(title);

        return {
            id: slug,
            filename,
            title,
            content,
            createdAt: stats.birthtime.toISOString(),
            updatedAt: stats.mtime.toISOString(),
        };
    });

    return markdownFiles;
}
