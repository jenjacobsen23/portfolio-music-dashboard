"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const separatorVariants = cva("shrink-0", {
  variants: {
    variant: {
      default: "bg-border",
      primary: "bg-primary/20",
      success: "bg-success/20",
      warning: "bg-warning/20",
      error: "bg-destructive/20",
    },
    size: {
      default: "h-[1px] w-full",
      sm: "h-[1px] w-full",
      lg: "h-[2px] w-full",
    },
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    orientation: "horizontal",
  },
})

export interface SeparatorProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>, "orientation">,
    VariantProps<typeof separatorVariants> {
  label?: string
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { 
      className, 
      orientation = "horizontal", 
      decorative = true, 
      variant,
      size,
      label,
      ...props 
    },
    ref
  ) => (
    <div className="relative flex items-center">
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation as "horizontal" | "vertical"}
        className={cn(separatorVariants({ variant, size, orientation }), className)}
        {...props}
      />
      {label && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
          {label}
        </div>
      )}
    </div>
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
