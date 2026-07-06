export default function WebWidgetMock() {
  return (
    <div className="animate-float-slow mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
        <span className="ml-3 rounded-full bg-white px-3 py-0.5 text-[10px] text-slate-400 shadow-sm">
          bisnis-anda.com
        </span>
      </div>

      {/* fake website content */}
      <div className="relative h-64 bg-gradient-to-br from-slate-50 to-white p-4">
        <div className="h-3 w-2/3 rounded bg-slate-100" />
        <div className="mt-2 h-3 w-1/2 rounded bg-slate-100" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-14 rounded-lg bg-slate-100" />
          <div className="h-14 rounded-lg bg-slate-100" />
          <div className="h-14 rounded-lg bg-slate-100" />
        </div>

        {/* chat widget bubble */}
        <div className="absolute bottom-4 right-4 w-44 rounded-xl border border-orange-100 bg-white p-3 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
              F
            </span>
            <p className="text-[11px] font-semibold text-slate-700">FAiAgent</p>
          </div>
          <p className="mt-2 rounded-lg bg-orange-50 px-2 py-1.5 text-[10px] text-slate-600">
            Halo! Ada yang bisa dibantu?
          </p>
        </div>

        {/* launcher button */}
        <div className="absolute bottom-4 right-4 flex h-12 w-12 translate-y-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12c0 4.418-4.03 8-9 8a9.7 9.7 0 0 1-3.5-.64L3 20l1.05-3.16A8.06 8.06 0 0 1 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
