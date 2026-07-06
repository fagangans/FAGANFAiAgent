import defaultContent from "@/data/content.json";
import { supabase, CONTENT_ROW_ID } from "@/lib/supabase";

export type SiteContent = typeof defaultContent;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Recursively fills in any keys missing from `stored` using `defaults`, so
 * newly added fields (e.g. "produk", "integrasi.highlights") always exist
 * even if the Supabase row predates them. Arrays and primitives in `stored`
 * always win over defaults when present.
 */
function deepMerge<T>(defaults: T, stored: unknown): T {
  if (!isPlainObject(defaults) || !isPlainObject(stored)) {
    return (stored ?? defaults) as T;
  }

  const result: Record<string, unknown> = { ...defaults };
  for (const key of Object.keys(defaults)) {
    result[key] = deepMerge(defaults[key as keyof typeof defaults], stored[key]);
  }
  for (const key of Object.keys(stored)) {
    if (!(key in result)) result[key] = stored[key];
  }
  return result as T;
}

export async function getContent(): Promise<SiteContent> {
  const { data, error } = await supabase
    .from("site_content")
    .select("data")
    .eq("id", CONTENT_ROW_ID)
    .maybeSingle();

  if (error || !data) {
    return defaultContent as SiteContent;
  }

  return deepMerge(defaultContent as SiteContent, data.data);
}

export async function saveContent(content: SiteContent): Promise<void> {
  const { error } = await supabase
    .from("site_content")
    .upsert({ id: CONTENT_ROW_ID, data: content, updated_at: new Date().toISOString() });

  if (error) {
    throw new Error(error.message);
  }
}
