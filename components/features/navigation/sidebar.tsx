import Link from 'next/link'
import { BarChart2, Clock, Compass, Settings, User, House } from 'lucide-react'

interface NavLinkProps {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
}

const NavLink = ({ href, icon, children }: NavLinkProps) => (
  <Link
    href={href}
    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
  >
    {icon}
    {children}
  </Link>
)

export function Sidebar() {
  return (
    <div className="h-screen w-64 bg-background border-r flex flex-col">
      {/* Logo/Brand */}
      <div className="p-6 flex items-center gap-2 border-b">
        <BarChart2 className="h-6 w-6" />
        <span className="font-semibold text-xl">Music Stats</span>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 py-6 flex flex-col gap-6">
        {/* Analytics Section */}
        <div className="px-3">
          <h2 className="mb-2 px-4 text-sm font-medium text-gray-500">Analytics</h2>
          <div className="space-y-1">
            <NavLink href="/dashboard" icon={<House className="h-4 w-4" />}>
              Dashboard
            </NavLink>
            <NavLink href="/trends" icon={<BarChart2 className="h-4 w-4" />}>
              Trends
            </NavLink>
            <NavLink href="/history" icon={<Clock className="h-4 w-4" />}>
              History
            </NavLink>
          </div>
        </div>
      </div>

      {/* Settings Section */}
      <div className="border-t">
        <div className="p-4 space-y-1">
          <NavLink href="/profile" icon={<User className="h-4 w-4" />}>
            Profile
          </NavLink>
          <NavLink href="/settings" icon={<Settings className="h-4 w-4" />}>
            Settings
          </NavLink>
        </div>
      </div>
    </div>
  )
} 