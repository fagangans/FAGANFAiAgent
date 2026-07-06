import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FaiAgentWidget from "@/components/FaiAgentWidget";
import { getContent } from "@/lib/content";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const content = await getContent();

  return (
    <>
      <Navbar content={content} />
      <main className="flex-1">{children}</main>
      <Footer content={content} />
      <WhatsAppFloat content={content} />
      <FaiAgentWidget />
    </>
  );
}
