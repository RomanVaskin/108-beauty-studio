import { Reveal } from '@/components/reveal'
import { ADVANTAGES } from '@/lib/site'

export function Advantages() {
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-px bg-primary-foreground/15 md:grid-cols-4">
        {ADVANTAGES.map((item, i) => (
          <Reveal
            key={item}
            delay={i * 60}
            className="flex min-h-40 flex-col justify-between bg-primary p-8 md:p-10"
          >
            <span className="font-serif text-2xl text-primary-foreground/50">
              0{i + 1}
            </span>
            <p className="mt-8 text-pretty text-lg leading-snug">{item}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
