export default function AggregationView() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6">
        Cooperative Aggregation
      </h2>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-zinc-800 rounded-xl p-4">
          <h3 className="font-semibold">
            Farmer A
          </h3>

          <p className="text-emerald-400 mt-2">
            10 Tons
          </p>
        </div>

        <div className="bg-zinc-800 rounded-xl p-4">
          <h3 className="font-semibold">
            Farmer B
          </h3>

          <p className="text-emerald-400 mt-2">
            15 Tons
          </p>
        </div>

        <div className="bg-zinc-800 rounded-xl p-4">
          <h3 className="font-semibold">
            Farmer C
          </h3>

          <p className="text-emerald-400 mt-2">
            25 Tons
          </p>
        </div>

        <div className="bg-emerald-500 rounded-xl p-4 text-black">
          <h3 className="font-semibold">
            Buyer Need
          </h3>

          <p className="text-2xl font-bold mt-2">
            50 Tons
          </p>
        </div>
      </div>
    </div>
  )
}