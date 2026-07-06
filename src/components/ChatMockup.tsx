export default function ChatMockup() {
  return (
    <div className="animate-float-slow mx-auto w-full max-w-sm rounded-[2rem] border border-slate-200 bg-white p-2 shadow-2xl">
      <div className="overflow-hidden rounded-[1.6rem] bg-[#e5ddd5]">
        <div className="flex items-center gap-3 bg-orange-600 px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
            F
          </div>
          <div>
            <p className="text-sm font-semibold text-white">FAiAgent Bot</p>
            <p className="flex items-center gap-1.5 text-[11px] text-orange-100">
              <span className="animate-soft-pulse h-1.5 w-1.5 rounded-full bg-orange-300" />
              online
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-3 py-4">
          <div className="max-w-[80%] rounded-lg rounded-tl-none bg-white px-3 py-2 text-xs text-slate-700 shadow-sm">
            Halo, kak! Ada yang bisa FAiAgent bantu hari ini? 👋
          </div>
          <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-orange-100 px-3 py-2 text-xs text-slate-700 shadow-sm">
            Stok baju ukuran M masih ada?
          </div>
          <div className="max-w-[80%] rounded-lg rounded-tl-none bg-white px-3 py-2 text-xs text-slate-700 shadow-sm">
            Masih kak, stok ukuran M tersedia 12 pcs. Mau langsung saya buatkan link pembayarannya?
          </div>
          <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-orange-100 px-3 py-2 text-xs text-slate-700 shadow-sm">
            Boleh, gas!
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
