import { getContent } from "@/lib/content";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export default async function KontakPage() {
  const content = await getContent();
  const { hero } = content.kontak;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20">
      <div
        aria-hidden
        className="animate-float-slow absolute -right-20 top-0 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl"
      />
      <Reveal>
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{hero.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{hero.subtitle}</p>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="relative mx-auto mt-12 max-w-lg px-6">
          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}
