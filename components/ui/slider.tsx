"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sliderVariants = cva(
  "relative flex w-full touch-none select-none items-center",
  {
    variants: {
      size: {
        default: "h-10",
        sm: "h-8",
        lg: "h-12",
      },
      variant: {
        default: "bg-secondary",
        primary: "bg-primary/20",
        success: "bg-success/20",
        warning: "bg-warning/20",
        error: "bg-destructive/20",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

const sliderTrackVariants = cva(
  "relative h-2 w-full grow overflow-hidden rounded-full",
  {
    variants: {
      variant: {
        default: "bg-secondary",
        primary: "bg-primary/20",
        success: "bg-success/20",
        warning: "bg-warning/20",
        error: "bg-destructive/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const sliderRangeVariants = cva("absolute h-full", {
  variants: {
    variant: {
      default: "bg-primary",
      primary: "bg-primary",
      success: "bg-success",
      warning: "bg-warning",
      error: "bg-destructive",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const sliderThumbVariants = cva(
  "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-primary",
        primary: "border-primary",
        success: "border-success",
        warning: "border-warning",
        error: "border-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderVariants> {
  showValue?: boolean
  valueFormatter?: (value: number) => string
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ 
  className, 
  size, 
  variant,
  showValue = false,
  valueFormatter = (value) => `${Math.round(value)}%`,
  ...props 
}, ref) => (
  <div className="relative w-full">
    <SliderPrimitive.Root
      ref={ref}
      className={cn(sliderVariants({ size, variant }), className)}
      {...props}
    >
      <SliderPrimitive.Track className={cn(sliderTrackVariants({ variant }))}>
        <SliderPrimitive.Range className={cn(sliderRangeVariants({ variant }))} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={cn(sliderThumbVariants({ variant }))} />
    </SliderPrimitive.Root>
    {showValue && props.value !== undefined && (
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
        {valueFormatter(Array.isArray(props.value) ? props.value[0] : props.value)}
      </div>
    )}
  </div>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
