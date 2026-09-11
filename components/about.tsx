import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { STATS } from '@/lib/site'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
          <Image
            src="/about.png"
            alt="Интерьер студии Пространство 108"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-5">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">О студии</span>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.08] text-foreground md:text-5xl">
              Не просто меняем цвет. Создаём образ, который подходит именно вам.
            </h2>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              Пространство 108 — это профессиональная студия, где каждый визит начинается
              с внимательной консультации. Мы работаем с премиальными материалами, бережно
              относимся к качеству волос и создаём современную колористику под ваш образ.
            </p>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              Индивидуальный подход, спокойная атмосфера и результат, за которым хочется
              возвращаться.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-background p-6">
                <div className="font-serif text-3xl text-foreground md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
