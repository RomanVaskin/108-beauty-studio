import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { SERVICES } from '@/lib/site'

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <SectionHeading
          eyebrow="Услуги"
          title="Что мы делаем"
          description="Полный уход за волосами — от диагностики и цвета до финальной укладки."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              as="article"
              delay={i * 60}
              className="group bg-background p-8 transition-colors duration-300 hover:bg-secondary md:p-10"
            >
              <span className="font-serif text-2xl text-primary/70">{service.index}</span>
              <h3 className="mt-6 font-serif text-2xl font-light text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
