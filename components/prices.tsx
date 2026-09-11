import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { BookButton } from '@/components/book-button'
import { PRICES } from '@/lib/site'

export function Prices() {
  return (
    <section id="prices" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="flex flex-col justify-between gap-10">
          <SectionHeading
            eyebrow="Стоимость"
            title="Прозрачные цены"
            description="Итоговая стоимость зависит от длины и густоты волос. Точную цену мастер назовёт на консультации."
          />
          <Reveal className="hidden lg:block">
            <BookButton>Записаться на консультацию</BookButton>
          </Reveal>
        </div>

        <Reveal className="flex flex-col">
          {PRICES.map((item) => (
            <div
              key={item.title}
              className="flex items-baseline justify-between gap-4 border-b border-border py-5 first:border-t"
            >
              <span className="text-base text-foreground md:text-lg">{item.title}</span>
              <span className="h-px flex-1 translate-y-[-2px] border-b border-dotted border-border" />
              <span className="font-serif text-lg text-foreground md:text-xl">
                {item.price}
              </span>
            </div>
          ))}
          <div className="mt-10 lg:hidden">
            <BookButton className="w-full">Записаться на консультацию</BookButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
