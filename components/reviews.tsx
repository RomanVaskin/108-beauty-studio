import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { REVIEWS } from '@/lib/site'

export function Reviews() {
  return (
    <section id="reviews" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <SectionHeading eyebrow="Отзывы" title="Что говорят гости" align="center" />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal
              key={review.text}
              as="article"
              delay={i * 80}
              className="flex flex-col justify-between rounded-sm border border-border bg-background p-8 md:p-9"
            >
              <p className="font-serif text-xl font-light leading-relaxed text-foreground">
                {`«${review.text}»`}
              </p>
              <footer className="mt-8 text-sm uppercase tracking-[0.2em] text-primary">
                {review.author}
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
