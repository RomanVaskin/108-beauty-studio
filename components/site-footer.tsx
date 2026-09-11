import { NAV_LINKS } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="font-serif text-4xl leading-none text-foreground">108</div>
            <p className="mt-3 text-sm text-muted-foreground">Пространство красоты</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Навигация в подвале">
            {NAV_LINKS.filter((l) => l.href !== '#reviews').map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Пространство 108</span>
          <span>Все контакты и отзывы — demo content.</span>
        </div>
      </div>
    </footer>
  )
}
