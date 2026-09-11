import Link from 'next/link'
import { cn } from '@/lib/utils'
import { BOOKING_URL } from '@/lib/site'

type BookButtonProps = {
  children: React.ReactNode
  variant?: 'solid' | 'outline' | 'ghost'
  className?: string
}

export function BookButton({ children, variant = 'solid', className }: BookButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

  const variants = {
    solid:
      'bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5',
    outline:
      'border border-foreground/25 text-foreground hover:border-foreground hover:-translate-y-0.5',
    ghost: 'text-foreground/70 hover:text-foreground',
  }

  return (
    <Link
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], className)}
    >
      {children}
    </Link>
  )
}
