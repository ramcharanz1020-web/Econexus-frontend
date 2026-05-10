const insights = [
  'Demand expected to increase by 18%',
  'Hyderabad buyers offering premium pricing',
  'Transport cost reduced through route clustering',
  'Trust score improving cooperative approvals',
]

export default function AIInsights() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        AI Insights Engine
      </h2>

      <div className="space-y-4">

        {insights.map((item) => (
          <div
            key={item}
            className="bg-zinc-800 rounded-xl p-4 border border-zinc-700"
          >
            {item}
          </div>
        ))}

      </div>
    </div>
  )
}
