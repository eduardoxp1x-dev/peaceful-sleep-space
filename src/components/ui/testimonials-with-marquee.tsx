import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn("py-24 md:py-36 bg-gradient-hero", className)}>
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.15]">
            {title}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl leading-[1.85]">
            {description}
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden">
          <div className="flex overflow-hidden [--gap:1rem] [--duration:40s]">
            <div className="flex shrink-0 justify-around gap-[var(--gap)] animate-marquee">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                    className="w-[350px] shrink-0"
                  />
                ))
              ))}
            </div>
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  )
}
