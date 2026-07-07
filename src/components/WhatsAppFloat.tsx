import type { SiteContent } from "@/lib/content";

export default function WhatsAppFloat({ content }: { content: SiteContent }) {
  const phone = content.site.phone.replace(/[^0-9]/g, "");

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg transition hover:bg-orange-600"
      aria-label="Chat via WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.93-9.92-9.93zm5.83 14a8.27 8.27 0 0 1-5.84 2.42 8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.55 3.71-8.26 8.27-8.26 2.21 0 4.28.86 5.84 2.42a8.18 8.18 0 0 1 2.42 5.84c0 2.22-.87 4.3-2.46 5.79z" />
      </svg>
    </a>
  );
}
