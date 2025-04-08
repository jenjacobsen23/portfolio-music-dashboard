"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Mock data - will be replaced with API data later
const generateMockData = () => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]
  const currentMonth = new Date().getMonth()
  
  return Array.from({ length: 12 }, (_, i) => {
    const monthIndex = (currentMonth - 11 + i + 12) % 12
    return {
      month: months[monthIndex],
      tracksPlayed: Math.floor(Math.random() * 300) + 100,
      hoursListened: Math.floor(Math.random() * 40) + 10
    }
  })
}

export function ListeningTrends() {
  const data = generateMockData()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Listening Trends</CardTitle>
        <CardDescription>Your listening activity over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="month"
                className="text-sm text-muted-foreground"
              />
              <YAxis
                yAxisId="left"
                className="text-sm text-muted-foreground"
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                className="text-sm text-muted-foreground"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                }}
                labelStyle={{
                  color: "hsl(var(--foreground))",
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="tracksPlayed"
                name="Tracks Played"
                stroke="hsl(157, 59%, 47%)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="hoursListened"
                name="Hours Listened"
                stroke="hsl(157, 40%, 35%)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
} 