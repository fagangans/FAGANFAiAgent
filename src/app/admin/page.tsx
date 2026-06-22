import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import { getContent } from "@/lib/content";
import AdminEditor from "@/components/AdminEditor";

export default async function AdminPage() {
  const authed = await isAdminAuthenticated();

  if (!authed) {
    redirect("/admin/login");
  }

  const content = await getContent();

  return <AdminEditor initialContent={content} />;
}
