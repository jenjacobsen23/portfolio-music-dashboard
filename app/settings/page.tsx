import { Metadata } from "next"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata: Metadata = {
  title: "Settings | Music Stats",
  description: "Manage your account settings and preferences",
}

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>
      <div className="space-y-6">
        {/* Appearance Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Appearance</h3>
          <div className="rounded-lg border p-4 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="font-medium">Theme</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Switch between light and dark mode
                </p>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 