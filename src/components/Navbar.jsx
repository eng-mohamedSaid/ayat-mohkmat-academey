import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe } from 'lucide-react'
import { getWhatsAppLink } from '../constants'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const whatsappLink = getWhatsAppLink(i18n.language)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar'
    i18n.changeLanguage(newLang)
    localStorage.setItem('ayat_lang', newLang)
    document.documentElement.lang = newLang
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'
    
    const currentPath = window.location.pathname
    let newPath
    if (newLang === 'en') {
      if (currentPath === '/') {
        newPath = '/en'
      } else if (currentPath === '/index.html') {
        newPath = '/en'
      } else if (currentPath.startsWith('/services') || currentPath.startsWith('/about') || currentPath.startsWith('/faq')) {
        newPath = '/en' + currentPath
      } else {
        newPath = '/en'
      }
    } else {
      if (currentPath === '/en' || currentPath.startsWith('/en/')) {
        newPath = currentPath.replace('/en', '') || '/'
      } else if (currentPath.startsWith('/en/services') || currentPath.startsWith('/en/about') || currentPath.startsWith('/en/faq')) {
        newPath = currentPath.replace('/en', '') || '/'
      } else {
        newPath = '/'
      }
    }
    window.location.href = newPath || '/'
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { key: 'services', label: t('nav.link_services') },
    { key: 'about', label: t('nav.link_about') },
    { key: 'faq', label: t('nav.link_faq') },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/assets/images/logo-ayat-letters.png" alt={t('nav.logo_alt')} className="h-10 object-contain" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.key} onClick={() => scrollToSection(link.key)} className="text-forest-950 hover:text-gold-500 transition-colors font-body font-medium">
                {link.label}
              </button>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gold-400 text-forest-950 hover:bg-gold-300 px-5 py-2.5 rounded-full font-body font-semibold transition-colors">
              {t('nav.cta')}
            </a>
          </div>

{isMobileMenuOpen ?
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-forest-950">
              <X size={28} />
            </button>
            :
            <div className="flex items-center gap-3">
              <button onClick={toggleLanguage} className="text-forest-950 hover:text-gold-500 transition-colors">
                <Globe size={24} />
              </button>
              <button className="md:hidden text-forest-950" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu size={28} />
              </button>
            </div>
          }
        </div>
      </div>

      {isMobileMenuOpen && (
          <div className="md:hidden h-svh inset-0 bg-white z-50 flex flex-col items-center gap-6 py-12">
              {navLinks.map((link) => (
                <button key={link.key} onClick={() => scrollToSection(link.key)} className="text-forest-950 text-xl font-body font-medium hover:text-gold-500 transition-colors">
                  {link.label}
                </button>
              ))}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gold-400 text-forest-950 px-8 py-3 rounded-full font-body font-semibold mt-4">
                {t('nav.cta')}
              </a>
          </div>
      )}
    </nav>
  )
}

export default Navbar