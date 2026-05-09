'use client'

import Link from 'next/link'

import {
  LayoutDashboard,
  Users,
  Handshake,
  ShieldCheck,
  Activity,
} from 'lucide-react'

const items = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    icon: Handshake,
    label: 'Negotiations',
    href: '/negotiations',
  },
  {
    icon: ShieldCheck,
    label: 'Passports',
    href: '/passports',
  },
  {
    icon: Users,
    label: 'Aggregation',
    href: '/aggregation',
  },
  {
    icon: Activity,
    label: 'Analytics',
    href: '/analytics',
  },
]

export default function Sidebar() {
  return (
    <div className="w-64 bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col sticky top-0 h-screen">

      <h1 className="text-2xl font-bold text-emerald-400 mb-10">
        Econexus
      </h1>

      <div className="space-y-3">

        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 hover:border hover:border-emerald-500 transition"
          >
            <item.icon className="w-5 h-5 text-emerald-400" />

            <span>{item.label}</span>
          </Link>
        ))}

      </div>
    </div>
  )
}