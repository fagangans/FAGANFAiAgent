import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getContent, saveContent } from "@/lib/content";
import { isAdminAuthenticated } from "@/lib/auth";

export async function GET() {
  const content = await getContent();
  return NextResponse.json(content);
}

export async function PUT(request: NextRequest) {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  await saveContent(body);

  revalidatePath("/", "layout");

  return NextResponse.json({ ok: true });
}
