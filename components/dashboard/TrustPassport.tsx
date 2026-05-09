export default function TrustPassport() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-[0_0_40px_rgba(16,185,129,0.15)]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            Digital Trust Passport
          </h2>

          <p className="text-zinc-400 text-sm mt-1">
            Farmer Identity Intelligence
          </p>
        </div>

        <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-black text-xl font-bold">
          91
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span>Quality Score</span>
            <span>88%</span>
          </div>

          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[88%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span>Delivery Reliability</span>
            <span>93%</span>
          </div>

          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-orange-400 w-[93%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span>Sustainability</span>
            <span>80%</span>
          </div>

          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-400 w-[80%]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}