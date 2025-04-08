import { LucideIcon } from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string | number
  subText: string
  icon: LucideIcon
}

export function StatCard({ title, value, subText, icon: Icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{subText}</p>
      </CardContent>
    </Card>
  )
} 