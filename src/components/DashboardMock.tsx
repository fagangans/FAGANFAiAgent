export default function DashboardMock() {
  const bars = [38, 55, 42, 70, 60, 88, 76];
  const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

  return (
    <div className="animate-float-slow w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
      {/* window bar */}
      <div className="flex items-center gap-1.5 border-b border-slate-100 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
        <span className="ml-3 text-xs font-medium text-slate-400">FAiAgent Dashboard</span>
      </div>

      {/* metric cards */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { label: "Chat Masuk", value: "1.284", tone: "text-orange-600" },
          { label: "Dibalas AI", value: "97%", tone: "text-amber-600" },
          { label: "Konversi", value: "+34%", tone: "text-orange-600" },
        ].map((m) => (
          <div key={m.label} className="rounded-xl bg-slate-50 p-3">
            <p className="text-[10px] font-medium text-slate-400">{m.label}</p>
            <p className={`mt-1 text-lg font-bold ${m.tone}`}>{m.value}</p>
          </div>
        ))}
      </div>

      {/* bar chart */}
      <div className="mt-4 rounded-xl border border-slate-100 p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-700">Percakapan Minggu Ini</p>
          <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-medium text-orange-600">
            Live
          </span>
        </div>
        <div className="mt-4 flex h-28 items-end justify-between gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-orange-500 to-amber-400"
                style={{ height: `${h}%` }}
              />
              <span className="text-[9px] text-slate-400">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
