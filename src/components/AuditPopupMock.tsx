export default function AuditPopupMock({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-float-slow group block w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="overflow-hidden rounded-xl bg-[#e5ddd5]">
        <div className="flex items-center gap-3 bg-emerald-600 px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
            F
          </div>
          <div>
            <p className="text-sm font-semibold text-white">FAiAudit</p>
            <p className="text-[11px] text-emerald-100">Laporan harian · WhatsApp</p>
          </div>
        </div>

        <div className="space-y-2 px-3 py-4">
          <div className="rounded-lg rounded-tl-none bg-white p-3 shadow-sm">
            <p className="text-xs font-semibold text-slate-800">📊 Audit Sales Hari Ini</p>
            <p className="mt-1 text-[11px] text-slate-600">
              Omzet: <span className="font-semibold text-emerald-600">Rp 12.4jt</span> (+18% dari kemarin)
            </p>
            <p className="text-[11px] text-slate-600">
              Chat masuk: <span className="font-semibold">86</span> · Closing:{" "}
              <span className="font-semibold text-emerald-600">23</span>
            </p>
            <p className="mt-2 text-[11px] text-slate-500">
              ⚠️ 3 leads belum di-follow up lebih dari 6 jam.
            </p>
          </div>
          <div className="ml-auto w-fit rounded-lg rounded-tr-none bg-orange-100 px-3 py-1.5 text-[11px] text-slate-700">
            Siap, langsung dicek 👍
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-2 pb-1 pt-3">
        <span className="text-xs font-semibold text-orange-600">Coba FAiAudit</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="h-4 w-4 text-orange-600 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>
    </a>
  );
}
