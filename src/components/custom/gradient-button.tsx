import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "variant";
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-full transition-all duration-300 overflow-hidden group",
          variant === "default" &&
            "bg-gradient-to-r from-primary via-[hsl(280,65%,55%)] to-primary text-primary-foreground shadow-glow hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]",
          variant === "variant" &&
            "bg-gradient-to-r from-accent via-[hsl(35,85%,55%)] to-accent text-accent-foreground hover:scale-105",
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);
GradientButton.displayName = "GradientButton";

export { GradientButton };
