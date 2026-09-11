import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { BookButton } from '@/components/book-button'

const DETAILS = [
  { label: 'Адрес', lines: ['Москва', 'Ленинградский проспект, 48'] },
  { label: 'Метро', lines: ['м. Аэропорт', '3 минуты пешком'] },
  { label: 'Телефон', lines: ['+7 999 108-10-80'] },
  { label: 'Email', lines: ['hello@studio108.demo'] },
  { label: 'Часы работы', lines: ['Ежедневно', '10:00–22:00'] },
]

export function Contacts() {
  return (
    <section id="contacts" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Контакты"
              title="Как нас найти"
              description="Мы находимся в шаговой доступности от метро. Будем рады видеть вас в студии."
            />

            <Reveal className="grid grid-cols-2 gap-x-6 gap-y-8">
              {DETAILS.map((detail) => (
                <div key={detail.label} className="flex flex-col gap-1.5">
                  <span className="text-xs uppercase tracking-[0.2em] text-primary">
                    {detail.label}
                  </span>
                  {detail.lines.map((line) => (
                    <span key={line} className="text-base text-foreground">
                      {line}
                    </span>
                  ))}
                </div>
              ))}
            </Reveal>

            <Reveal>
              <BookButton className="px-9 py-4 text-base">Записаться онлайн</BookButton>
            </Reveal>
          </div>

          <Reveal className="relative min-h-72 overflow-hidden rounded-sm border border-border bg-muted">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                Карта · placeholder
              </span>
            </div>
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(var(--color-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] [background-size:32px_32px]" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
