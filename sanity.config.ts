import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "@/sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: "production",
  title: "tripusers.com",
  apiVersion: "2024-01-24",
  basePath: "/studio",

  plugins: [structureTool(), visionTool()],
  schema: { types: schemas },
  useCdn: true,
});

export default config;
