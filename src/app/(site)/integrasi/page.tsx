import { getContent } from "@/lib/content";
import Reveal from "@/components/Reveal";
import { WhatsAppLogo, InstagramLogo } from "@/components/BrandLogos";
import { LinkIcon, ChartIcon } from "@/components/icons";

const CHANNEL_VISUALS = [
  { Logo: WhatsAppLogo, color: "text-[#25D366]" },
  { Logo: InstagramLogo, color: "text-[#E1306C]" },
  { Logo: LinkIcon, color: "text-orange-600" },
  { Logo: ChartIcon, color: "text-amber-600" },
];

export default async function IntegrasiPage() {
  const content = await getContent();
  const { hero, channels } = content.integrasi;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20">
        <div
          aria-hidden
          className="animate-drift absolute -left-20 top-4 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl"
        />
        <Reveal>
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{hero.title}</h1>
            <p className="mt-4 text-lg text-slate-600">{hero.subtitle}</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {channels.map((channel, idx) => {
            const visual = CHANNEL_VISUALS[idx % CHANNEL_VISUALS.length];
            const Icon = visual.Logo;
            return (
              <Reveal key={channel.name} delay={idx * 80}>
                <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 transition duration-300 group-hover:scale-110">
                    <Icon className={`h-7 w-7 ${visual.color}`} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{channel.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{channel.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
