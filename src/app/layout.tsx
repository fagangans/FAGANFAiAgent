import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FAiAgent - Chatbot WhatsApp untuk Bisnis Anda",
  description:
    "FAiAgent menjawab chat WhatsApp pelanggan Anda sepanjang hari, dengan gaya bicara yang masih terasa seperti tim Anda sendiri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ colorScheme: "light" }}
      className={`${jakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
        <script
          src="https://audit.faiagent.my.id/pageview-beacon.js"
          data-site="FAGANFAiAgent"
          defer
        ></script>
      </body>
    </html>
  );
}
