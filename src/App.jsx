import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import AgeGroups from './components/AgeGroups'
import HowItWorks from './components/HowItWorks'
import FreeSessionBanner from './components/FreeSessionBanner'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const path = window.location.pathname
    let lang = 'ar'
    if (path === '/en' || path.startsWith('/en/')) lang = 'en'
    else lang = localStorage.getItem('ayat_lang') || 'ar'
    
    i18n.changeLanguage(lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [i18n])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <WhyUs />
        <AgeGroups />
        <HowItWorks />
        <FreeSessionBanner />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App