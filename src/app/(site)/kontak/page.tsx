import { getContent } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

export default async function KontakPage() {
  const content = await getContent();
  const { hero } = content.kontak;

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h1 className="text-4xl font-bold text-slate-900">{hero.title}</h1>
        <p className="mt-4 text-lg text-slate-600">{hero.subtitle}</p>
      </div>

      <div className="mx-auto mt-12 max-w-lg px-6">
        <ContactForm />
      </div>
    </section>
  );
}
