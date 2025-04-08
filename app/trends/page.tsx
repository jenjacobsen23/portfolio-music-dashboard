import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trends | Music Stats",
  description: "Analyze your music listening trends",
}

export default function TrendsPage() {
  return (
    <div className="flex-1 spacse-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Trends</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Add your trend analysis components here */}
      </div>
    </div>
  )
} 