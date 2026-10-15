import MainLayout from '../../ui/layouts/MainLayout'
import Hero from '../../ui/organisms/Hero'
import Signals from '../../ui/organisms/Signals'
import Services from '../../ui/organisms/Services'
import Includes from '../../ui/organisms/Includes'
import WhyMe from '../../ui/organisms/WhyMe'
import CtaBand from '../../ui/organisms/CtaBand'
import About from '../../ui/organisms/About'
import Testimonials from '../../ui/organisms/Testimonials'
import Process from '../../ui/organisms/Process'
import Faq from '../../ui/organisms/Faq'
import Contact from '../../ui/organisms/Contact'
import WhatsappButton from '../../ui/atoms/WhatsappButton'

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Signals />
      <Services />
      <Includes />
      <WhyMe />
      <CtaBand />
      <About />
      <Testimonials />
      <Process />
      <Faq />
      <Contact />
      <WhatsappButton />
    </MainLayout>
  )
}
