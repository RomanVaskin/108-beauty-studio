import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { TEAM } from '@/lib/site'

export function Team() {
  return (
    <section id="team" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <SectionHeading
        eyebrow="Команда"
        title="Мастера студии"
        description="Специалисты, которые постоянно совершенствуются и любят своё дело."
      />

      <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
        {TEAM.map((member, i) => (
          <Reveal key={member.name} as="article" delay={i * 60} className="flex flex-col">
            <div className="relative aspect-square w-full overflow-hidden rounded-sm">
              <Image
                src={member.photo || '/placeholder.svg'}
                alt={`${member.name}, ${member.role}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <h3 className="mt-4 font-serif text-xl font-light text-foreground">
              {member.name}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary">
              {member.role}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {member.focus}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
