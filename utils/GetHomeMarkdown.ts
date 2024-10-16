import { Data } from "@/types/types";
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

export function getHomeMarkdown(): Data | null {
    const filePath = path.join(process.cwd(), "homeMarkdown", "Home.md");

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const content = fs.readFileSync(filePath, "utf-8");
    const stats = fs.statSync(filePath);
    const fileName = path.basename(filePath);
    const titleFromH1 = extractTitleFromMarkdown(content);
    const title =
        titleFromH1 || fileName.replace(/\.md$/, "");

    const slug = toSlug(title);


    return {
        id: slug,
        filename: fileName,
        title,
        content,
        createdAt: stats.birthtime.toISOString(),
        updatedAt: stats.mtime.toISOString(),
    };
}
