import { NextRequest, NextResponse } from "next/server";
import { createAdminSession, destroyAdminSession, getAdminPassword } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password !== getAdminPassword()) {
    return NextResponse.json({ error: "Password salah" }, { status: 401 });
  }

  await createAdminSession();
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  await destroyAdminSession();
  return NextResponse.json({ ok: true });
}
