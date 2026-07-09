import { NextRequest, NextResponse } from "next/server";
import { createAdminSession, destroyAdminSession, verifyAdminPassword } from "@/lib/auth";

// Simple in-memory rate limiter: max 5 attempts per IP per 15 minutes.
// Note: this resets on server restart and is per-instance (not shared
// across multiple server processes/regions), which is an acceptable
// trade-off for a lightweight admin login guard without adding a
// dependency or external store.
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_ATTEMPTS = 5;

type AttemptRecord = { count: number; firstAttemptAt: number };
const attemptsByIp = new Map<string, AttemptRecord>();

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }
  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = attemptsByIp.get(ip);

  if (!record || now - record.firstAttemptAt > RATE_LIMIT_WINDOW_MS) {
    attemptsByIp.set(ip, { count: 1, firstAttemptAt: now });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX_ATTEMPTS) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Terlalu banyak percobaan login. Coba lagi nanti." },
      { status: 429 }
    );
  }

  const { password } = await request.json();

  if (typeof password !== "string" || !verifyAdminPassword(password)) {
    return NextResponse.json({ error: "Password salah" }, { status: 401 });
  }

  await createAdminSession();
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  await destroyAdminSession();
  return NextResponse.json({ ok: true });
}
