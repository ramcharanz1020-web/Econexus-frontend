const alerts = [
  {
    title: 'Price Spike',
    desc: 'Tomato prices increased 12%',
  },
  {
    title: 'Logistics Delay',
    desc: 'Route congestion detected',
  },
  {
    title: 'High Demand',
    desc: 'Retail buyers requesting more stock',
  },
]

export default function SmartAlerts() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Smart Alerts
      </h2>

      <div className="space-y-4">

        {alerts.map((alert) => (
          <div
            key={alert.title}
            className="bg-zinc-800 rounded-xl p-4"
          >
            <h3 className="font-semibold text-emerald-400">
              {alert.title}
            </h3>

            <p className="text-zinc-400 mt-1">
              {alert.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  )
}