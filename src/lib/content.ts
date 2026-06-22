import fs from "node:fs/promises";
import path from "node:path";
import defaultContent from "@/data/content.json";

export type SiteContent = typeof defaultContent;

const CONTENT_PATH = path.join(process.cwd(), "src", "data", "content.json");

export async function getContent(): Promise<SiteContent> {
  try {
    const raw = await fs.readFile(CONTENT_PATH, "utf-8");
    return JSON.parse(raw) as SiteContent;
  } catch {
    return defaultContent as SiteContent;
  }
}

export async function saveContent(content: SiteContent): Promise<void> {
  await fs.writeFile(CONTENT_PATH, JSON.stringify(content, null, 2), "utf-8");
}
