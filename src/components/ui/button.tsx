import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { playGlobalHoverSound, playGlobalClickSound } from "@/hooks/useAudioFeedback";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_35px_hsl(var(--primary)/0.5)] hover:scale-[1.02]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary/40 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary/70",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] text-primary-foreground shadow-[0_0_40px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.6)] hover:scale-[1.03]",
        glass: "bg-card/60 backdrop-blur-xl border-2 border-primary/30 text-foreground hover:bg-card/80 hover:border-primary/60",
        premium: "relative bg-primary text-primary-foreground overflow-hidden shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] hover:scale-[1.02] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
      },
      size: {
        default: "h-11 px-7 py-2",
        sm: "h-9 px-5",
        lg: "h-13 px-10 text-base",
        xl: "h-14 px-12 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  enableSound?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, enableSound = true, onMouseEnter, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    const handleMouseEnter = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      if (enableSound) playGlobalHoverSound();
      onMouseEnter?.(e);
    }, [enableSound, onMouseEnter]);

    const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      if (enableSound) playGlobalClickSound();
      onClick?.(e);
    }, [enableSound, onClick]);

    return (
      <Comp 
        className={cn(buttonVariants({ variant, size, className }))} 
        ref={ref} 
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        {...props} 
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
