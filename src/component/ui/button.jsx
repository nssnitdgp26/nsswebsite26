import React, { cloneElement } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-[transform,background-color,border-color,box-shadow,color] duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_12px_30px_-12px_rgb(143_174_255/0.9)] hover:-translate-y-0.5 hover:bg-[#abc0ff]",

        destructive:
          "bg-destructive text-white",

        outline:
          "border border-white/15 bg-white/[0.035] hover:bg-white/[0.09]",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        ghost:
          "hover:bg-accent hover:text-accent-foreground",

        link:
          "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 gap-1.5 px-3",
        lg: "h-12 px-6",
        icon: "size-9",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}) {
  const classes = cn(
    buttonVariants({
      variant,
      size,
    }),
    className
  );

  if (asChild) {
    return cloneElement(children, {
      ...props,
      className: cn(children.props.className, classes),
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export { Button, buttonVariants };
