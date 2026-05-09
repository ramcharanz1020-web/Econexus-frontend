export default function Navbar() {
  return (
    <div className="h-16 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-50">

      <div>
        <h2 className="text-xl font-semibold">
          AI Coordination Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>

          <span className="text-sm text-zinc-300">
            AI Coordination Active
          </span>
        </div>

        <div className="w-10 h-10 rounded-full bg-emerald-500"></div>

      </div>
    </div>
  )
}