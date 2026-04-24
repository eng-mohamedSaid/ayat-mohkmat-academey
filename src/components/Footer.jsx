import { useTranslation } from 'react-i18next'
import { MessageCircle, Facebook } from 'lucide-react'
import { WhatsAppNumber, WhatsAppNumberFormatted, FacebookPage } from '../constants'

const Footer = () => {
  const { t } = useTranslation()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { key: 'services', label: t('footer.link_services') },
    { key: 'about', label: t('footer.link_about') },
    { key: 'how-it-works', label: t('footer.link_how') },
    { key: 'faq', label: t('footer.link_faq') },
  ]

  return (
    <footer className="bg-ink-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display text-xl text-gold-400">{t('nav.academy_name')}</span>
            </div>
            <p className="font-body text-ink-300">{t('footer.tagline')}</p>
          </div>

          <div>
            <h4 className="font-body font-semibold text-white mb-4">{t('footer.links_heading')}</h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button key={link.key} onClick={() => scrollToSection(link.key)} className="font-body text-ink-300 hover:text-gold-400 transition-colors text-start">
                  {link.label}
                </button>
              ))}
              <a href={`https://wa.me/${WhatsAppNumber}`} target="_blank" rel="noopener noreferrer" className="font-body text-ink-300 hover:text-gold-400 transition-colors">
                {t('footer.link_book')}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body font-semibold text-white mb-4">{t('footer.contact_heading')}</h4>
            <div className="flex flex-col gap-3">
              <a href={`https://wa.me/${WhatsAppNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-ink-300 hover:text-gold-400 transition-colors">
                <MessageCircle size={18} className="text-gold-400" />
                <span>{t('footer.whatsapp_label')}: <span dir="ltr">{WhatsAppNumberFormatted}</span></span>
              </a>
              <a href={FacebookPage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-ink-300 hover:text-gold-400 transition-colors">
                <Facebook size={18} className="text-gold-400" />
                <span>{t('footer.facebook_label')}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ink-700 mt-12 pt-8 text-center">
          <p className="font-body text-ink-400">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer