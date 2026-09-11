import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Prices } from '@/components/prices'
import { Works } from '@/components/works'
import { Team } from '@/components/team'
import { Advantages } from '@/components/advantages'
import { Reviews } from '@/components/reviews'
import { FirstVisit } from '@/components/first-visit'
import { Contacts } from '@/components/contacts'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { StickyCta } from '@/components/sticky-cta'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Prices />
        <Works />
        <Team />
        <Advantages />
        <Reviews />
        <FirstVisit />
        <Contacts />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCta />
    </>
  )
}
