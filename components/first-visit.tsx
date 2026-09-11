import { Reveal } from '@/components/reveal'
import { BookButton } from '@/components/book-button'

export function FirstVisit() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <Reveal className="flex flex-col items-center gap-8 rounded-sm border border-border bg-secondary/50 px-6 py-16 text-center md:py-24">
        <span className="font-serif text-7xl font-light leading-none text-primary md:text-8xl">
          −10%
        </span>
        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl">
            на первый визит
          </h2>
          <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            Познакомьтесь со студией и найдите своего мастера.
          </p>
        </div>
        <BookButton className="px-9 py-4 text-base">Записаться</BookButton>
      </Reveal>
    </section>
  )
}
