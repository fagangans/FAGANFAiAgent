import { cookies } from "next/headers";
import crypto from "crypto";

const SESSION_COOKIE = "faiagent_admin_session";
const SESSION_VALUE = "authenticated";

export function getAdminPassword(): string {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error(
      "ADMIN_PASSWORD environment variable is not set. Refusing to authenticate without a configured admin password."
    );
  }
  return password;
}

/**
 * Timing-safe comparison of the provided password against the configured
 * admin password. Returns false (never throws) on any mismatch, including
 * when ADMIN_PASSWORD is unset or lengths differ.
 */
export function verifyAdminPassword(candidate: string): boolean {
  let expected: string;
  try {
    expected = getAdminPassword();
  } catch {
    return false;
  }

  const candidateBuf = Buffer.from(candidate ?? "", "utf8");
  const expectedBuf = Buffer.from(expected, "utf8");

  // timingSafeEqual requires equal-length buffers; pad to avoid leaking
  // length information via an early length check.
  const maxLen = Math.max(candidateBuf.length, expectedBuf.length, 1);
  const a = Buffer.alloc(maxLen);
  const b = Buffer.alloc(maxLen);
  candidateBuf.copy(a);
  expectedBuf.copy(b);

  const equal = crypto.timingSafeEqual(a, b);
  return equal && candidateBuf.length === expectedBuf.length;
}

export async function createAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, SESSION_VALUE, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
}

export async function destroyAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value === SESSION_VALUE;
}
