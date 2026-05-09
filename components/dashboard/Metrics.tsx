import { metrics } from '@/data/mock'

export default function Metrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {metrics.map((item) => (
        <div
          key={item.title}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-emerald-500 transition"
        >
          <p className="text-zinc-400 text-sm">
            {item.title}
          </p>

          <h2 className="text-3xl font-bold mt-2 text-emerald-400">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  )
}