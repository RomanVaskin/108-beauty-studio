'use client'

import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/lib/site'
import { BookButton } from '@/components/book-button'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
        <a
          href="#top"
          className="font-serif text-2xl leading-none tracking-tight text-foreground md:text-3xl"
          aria-label="Пространство 108 — на главную"
        >
          108
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Основная навигация">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BookButton>Записаться</BookButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
        >
          <span className="sr-only">Меню</span>
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={cn(
                'h-px w-full bg-foreground transition-all duration-300',
                open && 'translate-y-[3px] rotate-45',
              )}
            />
            <span
              className={cn(
                'h-px w-full bg-foreground transition-all duration-300',
                open && '-translate-y-[3px] -rotate-45',
              )}
            />
          </div>
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col justify-center bg-background px-8 transition-all duration-500 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <nav className="flex flex-col gap-6" aria-label="Мобильная навигация">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-4xl text-foreground/90 transition-colors hover:text-primary"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-12" onClick={() => setOpen(false)}>
          <BookButton className="w-full">Записаться</BookButton>
        </div>
      </div>
    </header>
  )
}
