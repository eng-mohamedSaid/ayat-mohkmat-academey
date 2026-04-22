import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const WhatsAppNumber = '+966554875264'
  const message = encodeURIComponent(i18n.language === 'ar'
    ? 'مرحباً، أنا مهتم بالتسجيل في أكاديمية آيات محكمات. أرجو التواصل معي لحجز الحصة التجريبية المجانية.'
    : 'Hello, I\'m interested in enrolling at Ayat Muhkamat Academy. Please contact me to book my free trial session.')
  const whatsappLink = `https://wa.me/${WhatsAppNumber}?text=${message}`

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-forest-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo-ayat-letters.png" alt={t('nav.logo_alt')} className="h-10 w-10 object-contain" />
            <span className="font-display text-xl md:text-2xl text-gold-400">{t('nav.academy_name')}</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.key} onClick={() => scrollToSection(link.key)} className="text-forest-100 hover:text-gold-400 transition-colors font-body font-medium">
                {link.label}
              </button>
            ))}
            <button onClick={toggleLanguage} className="text-forest-100 hover:text-gold-400 transition-colors font-body font-medium">
              {t('nav.lang_toggle')}
            </button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gold-400 text-forest-950 hover:bg-gold-300 px-5 py-2.5 rounded-full font-body font-semibold transition-colors">
              {t('nav.cta')}
            </a>
          </div>

          <button className="md:hidden text-forest-100" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-forest-950 z-50">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <img src="/logo-ayat-letters.png" alt={t('nav.logo_alt')} className="h-10 w-10 object-contain" />
                <span className="font-display text-xl text-gold-400">{t('nav.academy_name')}</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-forest-100">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col items-center gap-6 py-12">
              {navLinks.map((link) => (
                <button key={link.key} onClick={() => scrollToSection(link.key)} className="text-forest-100 text-xl font-body font-medium">
                  {link.label}
                </button>
              ))}
              <button onClick={toggleLanguage} className="text-gold-400 text-xl font-body font-medium">
                {t('nav.lang_toggle')}
              </button>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gold-400 text-forest-950 px-8 py-3 rounded-full font-body font-semibold mt-4">
                {t('nav.cta')}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar