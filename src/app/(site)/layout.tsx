import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ChatWidget from "@/components/ChatWidget";
import { getContent } from "@/lib/content";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const content = await getContent();

  return (
    <>
      <Navbar content={content} />
      <main className="flex-1">{children}</main>
      <Footer content={content} />
      <WhatsAppFloat content={content} />
      <ChatWidget siteName={content.site.name} />
    </>
  );
}
