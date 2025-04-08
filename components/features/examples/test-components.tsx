"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"

export function TestComponents() {
  return (
    <div className="p-8 space-y-8">
      {/* Button Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Buttons</h2>
        <div className="flex gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      {/* Card Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Cards</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Tracks</CardTitle>
              <CardDescription>Your music collection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,248</div>
              <div className="text-sm text-muted-foreground">+20 since last month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Listening Time</CardTitle>
              <CardDescription>Total hours played</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">428h</div>
              <div className="text-sm text-muted-foreground">+20% from last month</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Badge Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Badges</h2>
        <div className="flex gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      {/* Dropdown Menu Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Dropdown Menu</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Purple & Teal</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Purple & Teal</DropdownMenuItem>
            <DropdownMenuItem>Dark & Light</DropdownMenuItem>
            <DropdownMenuItem>Custom Theme</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      {/* Avatar and User Info */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">User Display</h2>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-muted-foreground">john@example.com</div>
          </div>
        </div>
        <Separator />
      </section>

      {/* Controls */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Controls</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Switch id="airplane-mode" />
            <label htmlFor="airplane-mode">Airplane Mode</label>
          </div>
          
          <div className="space-y-2">
            <label>Volume</label>
            <Slider
              defaultValue={[60]}
              max={100}
              step={1}
            />
          </div>

          <div className="space-y-2">
            <label>Progress</label>
            <Progress value={60} />
          </div>
        </div>
      </section>
    </div>
  )
} 