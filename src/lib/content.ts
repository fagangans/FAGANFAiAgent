import defaultContent from "@/data/content.json";
import { supabase, CONTENT_ROW_ID } from "@/lib/supabase";

export type SiteContent = typeof defaultContent;

export async function getContent(): Promise<SiteContent> {
  const { data, error } = await supabase
    .from("site_content")
    .select("data")
    .eq("id", CONTENT_ROW_ID)
    .maybeSingle();

  if (error || !data) {
    return defaultContent as SiteContent;
  }

  // Merge stored data over defaults so newly added top-level sections
  // (e.g. "produk") always exist even if the stored row predates them.
  return { ...defaultContent, ...(data.data as object) } as SiteContent;
}

export async function saveContent(content: SiteContent): Promise<void> {
  const { error } = await supabase
    .from("site_content")
    .upsert({ id: CONTENT_ROW_ID, data: content, updated_at: new Date().toISOString() });

  if (error) {
    throw new Error(error.message);
  }
}
