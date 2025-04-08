import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profile | Music Stats",
  description: "View and manage your profile",
}

export default function ProfilePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {/* Add your profile information and stats here */}
      </div>
    </div>
  )
} 