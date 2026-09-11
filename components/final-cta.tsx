import { Reveal } from '@/components/reveal'
import { BookButton } from '@/components/book-button'

export function FinalCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-10 px-5 py-28 text-center md:px-10 md:py-40">
        <Reveal>
          <h2 className="text-balance font-serif text-5xl font-light leading-[1.05] md:text-7xl">
            Ваш следующий образ начинается здесь.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <BookButton
            variant="outline"
            className="border-primary-foreground/40 px-10 py-4 text-base text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            Записаться онлайн
          </BookButton>
        </Reveal>
      </div>
    </section>
  )
}
