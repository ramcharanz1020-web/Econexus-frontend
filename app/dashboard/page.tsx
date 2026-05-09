'use client'
import Sidebar from '@/components/layout/sidebar'
import Navbar from '@/components/layout/navbar'

import Metrics from '@/components/dashboard/Metrics'
import NegotiationPanel from '@/components/dashboard/NegotiationPanel'
import AggregationView from '@/components/dashboard/AggregationView'
import TrustPassport from '@/components/dashboard/TrustPassport'
import LiveFeed from '@/components/dashboard/LiveFeed'
import { motion } from 'framer-motion'
export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

 <div className="p-6">

  <div id="dashboard">
    <Metrics />
  </div>

  <div id="negotiations" className="mt-6">
    <NegotiationPanel />
  </div>

  <div id="aggregation" className="mt-6">
    <AggregationView />
  </div>

  <div className="grid md:grid-cols-2 gap-6 mt-6">

    <div id="passports">
      <TrustPassport />
    </div>

    <div id="analytics">
      <LiveFeed />
    </div>

  </div>

</div>
      </div>
    </div>
  )
}