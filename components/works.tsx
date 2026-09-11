import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { WORKS } from '@/lib/site'

export function Works() {
  return (
    <section id="works" className="border-t border-border bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Портфолио"
          title="Наши работы"
          description="Каждый образ создан индивидуально — с вниманием к цвету, форме и качеству волос."
        />
      </div>

      <div className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {WORKS.map((work) => (
          <figure
            key={work.src}
            className="group relative aspect-[3/4] w-[78%] flex-none snap-start overflow-hidden rounded-sm sm:w-[46%] lg:w-[30%]"
          >
            <Image
              src={work.src || '/placeholder.svg'}
              alt={work.alt}
              fill
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 30vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-t from-foreground/60 to-transparent p-5">
              <span className="text-sm uppercase tracking-[0.2em] text-background">
                {work.label}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
