export default function AiReplyMock() {
  return (
    <div className="animate-float-slow relative mx-auto w-full max-w-sm rounded-[2rem] border border-white/60 bg-white/40 p-2 shadow-2xl backdrop-blur-xl">
      <div className="overflow-hidden rounded-[1.6rem] bg-white/60 backdrop-blur-sm">
        <div className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/25 text-base">
            🤖
          </div>
          <div>
            <p className="text-sm font-semibold text-white">FAiAgent AI</p>
            <p className="flex items-center gap-1.5 text-[11px] text-orange-50">
              <span className="animate-soft-pulse h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Membalas otomatis
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-3 py-4">
          <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-none bg-orange-100 px-3 py-2 text-xs text-slate-700 shadow-sm">
            Kak, baju warna hitam ukuran L masih ada?
          </div>
          <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 text-xs text-slate-700 shadow-sm">
            Masih ready kak, stok 8 pcs. Mau saya buatkan link pembayarannya sekarang?
          </div>
          <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-none bg-orange-100 px-3 py-2 text-xs text-slate-700 shadow-sm">
            Boleh, langsung aja kak
          </div>
          <div className="flex items-center gap-1.5 rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
