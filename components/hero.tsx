import Image from 'next/image'
import { BookButton } from '@/components/book-button'

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <Image
        src="/hero.png"
        alt="Гостья студии с ухоженными волосами после окрашивания"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-foreground/45" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-16 pt-28 md:px-10 md:pb-24">
        <div className="max-w-3xl">
          <span className="mb-6 inline-flex items-center rounded-full border border-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-background">
            −10% на первый визит
          </span>
          <h1 className="text-balance font-serif text-5xl font-light leading-[1.02] text-background md:text-7xl lg:text-8xl">
            Красота начинается с понимания вас.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-background/85 md:text-lg">
            Современная колористика, стрижки и профессиональный уход за волосами.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BookButton className="px-9 py-4 text-base">Записаться</BookButton>
            <a
              href="#works"
              className="inline-flex items-center justify-center rounded-full border border-background/40 px-9 py-4 text-base text-background transition-colors hover:bg-background/10"
            >
              Смотреть работы
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
