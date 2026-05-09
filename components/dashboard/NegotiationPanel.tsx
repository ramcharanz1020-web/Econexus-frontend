'use client'

import { motion } from 'framer-motion'

export default function NegotiationPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6 shadow-[0_0_40px_rgba(16,185,129,0.15)]"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          AI Negotiation Engine
        </h2>

        <div className="text-emerald-400 animate-pulse">
          ACTIVE
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-zinc-800 rounded-xl p-5">
          <p className="text-zinc-400 text-sm">
            Farmer Expected
          </p>

          <h2 className="text-4xl font-bold mt-2">
            ₹30/kg
          </h2>
        </div>

        <div className="bg-zinc-800 rounded-xl p-5">
          <p className="text-zinc-400 text-sm">
            Buyer Offer
          </p>

          <h2 className="text-4xl font-bold mt-2 text-orange-400">
            ₹24/kg
          </h2>
        </div>

        <div className="bg-emerald-500 rounded-xl p-5 text-black">
          <p className="text-sm font-medium">
            AI Fair Price
          </p>

          <h2 className="text-4xl font-bold mt-2">
            ₹27/kg
          </h2>
        </div>
      </div>

      <div className="mt-6 bg-zinc-800 rounded-xl p-4">
        <p className="text-zinc-300">
          AI optimized price using freshness score,
          trust history, transportation cost,
          and market demand.
        </p>
      </div>
    </motion.div>
  )
}