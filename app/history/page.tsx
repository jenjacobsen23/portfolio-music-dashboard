import { Metadata } from "next"

export const metadata: Metadata = {
  title: "History | Music Stats",
  description: "View your music listening history",
}

export default function HistoryPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">History</h2>
      </div>
      <div className="space-y-4">
        {/* Add your history timeline or list component here */}
      </div>
    </div>
  )
} 