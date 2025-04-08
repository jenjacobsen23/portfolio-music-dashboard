import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-8 px-2 py-1 text-sm",
        lg: "h-12 px-4 py-3 text-lg",
      },
      variant: {
        default: "bg-background",
        ghost: "border-none bg-transparent focus-visible:ring-1",
        error: "border-destructive focus-visible:ring-destructive",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  /** Add left side content inside input */
  startContent?: React.ReactNode
  /** Add right side content inside input */
  endContent?: React.ReactNode
  /** Error message to display */
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", variant, size, startContent, endContent, error, ...props }, ref) => {
    const id = React.useId()
    
    return (
      <div className="relative">
        <div className="relative">
          {startContent && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              {startContent}
            </div>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({ variant, size }),
              startContent && "pl-10",
              endContent && "pr-10",
              className
            )}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            {...props}
          />
          {endContent && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {endContent}
            </div>
          )}
        </div>
        {error && (
          <p
            id={`${id}-error`}
            className="mt-1.5 text-sm text-destructive"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants } 