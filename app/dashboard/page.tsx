import { Metadata } from "next"
import { Music, Clock, Users, ListMusic } from "lucide-react"
import { StatCard } from "@/components/ui/stat-card"
import { ListeningTrends } from "@/components/charts/listening-trends"

export const metadata: Metadata = {
  title: "Dashboard | Spotify Stats",
  description: "View your music statistics and analytics",
}

// Dummy data for demonstration
const dummyStats = {
  totalTracks: {
    value: "1,234",
    change: "+123 since last month"
  },
  listeningTime: {
    value: "42h",
    change: "+5h since last month"
  },
  artists: {
    value: "567",
    change: "+45 since last month"
  },
  playlists: {
    value: "89",
    change: "12 active playlists"
  }
}

export default async function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Tracks"
          value={dummyStats.totalTracks.value}
          subText={dummyStats.totalTracks.change}
          icon={Music}
        />
        <StatCard
          title="Listening Time"
          value={dummyStats.listeningTime.value}
          subText={dummyStats.listeningTime.change}
          icon={Clock}
        />
        <StatCard
          title="Artists"
          value={dummyStats.artists.value}
          subText={dummyStats.artists.change}
          icon={Users}
        />
        <StatCard
          title="Playlists"
          value={dummyStats.playlists.value}
          subText={dummyStats.playlists.change}
          icon={ListMusic}
        />
      </div>
      <div className="grid gap-4">
        <ListeningTrends />
      </div>
    </div>
  )
} 