import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface BenefitProps {
  text: string
  checked: boolean
}

const Benefit = ({ text, checked }: BenefitProps) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20">
          <Check className="w-3.5 h-3.5 text-primary" />
        </span>
      ) : (
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-muted/30">
          <X className="w-3.5 h-3.5 text-muted-foreground/50" />
        </span>
      )}
      <span className={cn("text-[15px] font-body", checked ? "text-foreground" : "text-muted-foreground/50 line-through")}>
        {text}
      </span>
    </div>
  )
}

interface PricingCardProps {
  tier: string
  price: string
  bestFor: string
  CTA: string
  benefits: Array<{ text: string; checked: boolean }>
  className?: string
  onCtaClick?: () => void
}

export const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  className,
  onCtaClick,
}: PricingCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className={cn(
        "relative overflow-hidden border-border bg-gradient-card p-7 md:p-8 flex flex-col h-full",
        className
      )}>
        <div className="mb-6">
          <p className="text-sm font-body font-medium text-primary tracking-widest uppercase mb-3">
            {tier}
          </p>
          <p className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
            {price}
          </p>
          <p className="text-sm font-body text-muted-foreground leading-relaxed">
            {bestFor}
          </p>
        </div>

        <div className="space-y-3.5 mb-8 flex-1">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>

        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold py-5 rounded-full shadow-glow transition-all duration-300 tracking-wide"
          onClick={onCtaClick}
        >
          {CTA}
        </Button>
      </Card>
    </motion.div>
  )
}
