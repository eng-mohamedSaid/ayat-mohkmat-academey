import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const FreeSessionBanner = () => {
  const { t, i18n } = useTranslation()

  const WhatsAppNumber = '+966554875264'
  const message = encodeURIComponent(i18n.language === 'ar'
    ? 'مرحباً، أنا مهتم بالتسجيل في أكاديمية آيات محكمات. أرجو التواصل معي لحجز الحصة التجريبية المجانية.'
    : 'Hello, I\'m interested in enrolling at Ayat Muhkamat Academy. Please contact me to book my free trial session.')
  const whatsappLink = `https://wa.me/${WhatsAppNumber}?text=${message}`

  return (
    <section className="py-16 bg-gradient-to-r from-gold-500 to-gold-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <span className="inline-block bg-white/20 text-forest-950 text-sm font-body font-semibold px-4 py-2 rounded-full mb-4">
            {t('free_session.badge')}
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-forest-950 mb-4">{t('free_session.headline')}</h2>
          <p className="font-body text-forest-800 max-w-2xl mx-auto mb-6">{t('free_session.body')}</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-forest-950 text-gold-400 hover:bg-forest-900 px-10 py-5 rounded-full font-body font-bold text-lg transition-colors">
            {t('free_session.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FreeSessionBanner