"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        default: "h-6 w-11",
        sm: "h-4 w-8",
        lg: "h-8 w-14",
      },
      variant: {
        default: "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        primary: "data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary/20",
        success: "data-[state=checked]:bg-success data-[state=unchecked]:bg-success/20",
        warning: "data-[state=checked]:bg-warning data-[state=unchecked]:bg-warning/20",
        error: "data-[state=checked]:bg-destructive data-[state=unchecked]:bg-destructive/20",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

const thumbVariants = cva(
  "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform",
  {
    variants: {
      size: {
        default: "h-5 w-5 data-[state=checked]:translate-x-5",
        sm: "h-3 w-3 data-[state=checked]:translate-x-4",
        lg: "h-7 w-7 data-[state=checked]:translate-x-6",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {
  label?: string
  description?: string
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ 
  className, 
  size, 
  variant,
  label,
  description,
  ...props 
}, ref) => (
  <div className="flex items-center space-x-2">
    <SwitchPrimitives.Root
      ref={ref}
      className={cn(switchVariants({ size, variant }), className)}
      {...props}
    >
      <SwitchPrimitives.Thumb className={cn(thumbVariants({ size }))} />
    </SwitchPrimitives.Root>
    {(label || description) && (
      <div className="grid gap-1.5 leading-none">
        {label && (
          <label
            htmlFor={props.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        {description && (
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    )}
  </div>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
