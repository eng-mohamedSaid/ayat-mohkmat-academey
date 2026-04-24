import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { BookOpen, Mic, GraduationCap } from 'lucide-react'
import { getWhatsAppLink } from '../constants'

const FinalCTA = () => {
  const { t, i18n } = useTranslation()

  const whatsappLink = getWhatsAppLink(i18n.language)

  const features = [
    { icon: BookOpen, text: 'cta.feature1' },
    { icon: Mic, text: 'cta.feature2' },
    { icon: GraduationCap, text: 'cta.feature3' },
  ]

  return (
    <section className="relative py-24 bg-forest-950 overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c9a227\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">{t('cta.headline')}</h2>
          <p className="font-body text-xl text-forest-100 mb-8 max-w-2xl mx-auto">{t('cta.sub')}</p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-forest-100">
                <feature.icon size={20} className="text-gold-400" />
                <span className="font-body">{t(feature.text)}</span>
              </div>
            ))}
          </div>

          <span className="inline-block bg-gold-500/20 text-gold-300 text-sm font-body font-semibold px-4 py-2 rounded-full mb-6">
            {t('cta.badge')}
          </span>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block bg-gold-400 text-forest-950 hover:bg-gold-300 px-10 py-5 rounded-full font-body font-bold text-lg transition-colors shadow-gold-glow max-w-md mx-auto">
            {t('cta.cta_btn')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA