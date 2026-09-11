'use client'

import { useEffect, useState } from 'react'
import { BookButton } from '@/components/book-button'
import { cn } from '@/lib/utils'

export function StickyCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/90 p-3 backdrop-blur-md transition-transform duration-500 lg:hidden',
        show ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <BookButton className="w-full">Записаться онлайн</BookButton>
    </div>
  )
}
