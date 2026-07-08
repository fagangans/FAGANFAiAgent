import ChatMockup from "./ChatMockup";

const OTHER_PRODUCTS = ["FAiAgent Web", "FAiScrapper", "FAicorousel Maker", "FAibelClip", "FAiAudit"];

export default function EcosystemHeroMock() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        aria-hidden
        className="absolute -right-5 top-8 h-[85%] w-full rotate-3 rounded-[2rem] border border-slate-200 bg-white shadow-xl"
      />
      <div
        aria-hidden
        className="absolute -left-5 top-4 h-[85%] w-full -rotate-2 rounded-[2rem] border border-slate-200 bg-white shadow-lg"
      />

      <div className="relative">
        <ChatMockup />
      </div>

      <div className="relative mt-5 flex flex-wrap justify-center gap-2">
        {OTHER_PRODUCTS.map((name) => (
          <span
            key={name}
            className="rounded-full border border-orange-100 bg-white px-3 py-1 text-[11px] font-medium text-orange-700 shadow-sm"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
