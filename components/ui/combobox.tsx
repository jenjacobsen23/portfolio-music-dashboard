"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const comboboxVariants = cva(
  "flex w-full items-center justify-between rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
  {
    variants: {
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-8 px-2 py-1 text-xs",
        lg: "h-12 px-4 py-3 text-base",
      },
      variant: {
        default: "bg-background",
        ghost: "border-none bg-transparent focus:ring-1",
        error: "border-destructive focus:ring-destructive",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

export interface ComboboxProps<T>
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "value" | "onChange">,
    VariantProps<typeof comboboxVariants> {
  items: T[]
  value?: T
  onValueChange?: (value: T) => void
  placeholder?: string
  emptyText?: string
  getItemLabel?: (item: T) => string
  getItemValue?: (item: T) => string
  error?: boolean
  disabled?: boolean
  loading?: boolean
  className?: string
}

export function Combobox<T>({
  items,
  value,
  onValueChange,
  placeholder = "Select an item",
  emptyText = "No items found.",
  getItemLabel = (item: T) => String(item),
  getItemValue = (item: T) => String(item),
  variant,
  size,
  error,
  disabled,
  loading,
  className,
  ...props
}: ComboboxProps<T>) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled || loading}
          className={cn(
            comboboxVariants({ variant: error ? "error" : variant, size }),
            "justify-between",
            className
          )}
          {...props}
        >
          {value ? getItemLabel(value) : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={getItemValue(item)}
                  value={getItemValue(item)}
                  onSelect={() => {
                    onValueChange?.(item)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value && getItemValue(value) === getItemValue(item)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {getItemLabel(item)}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
} 