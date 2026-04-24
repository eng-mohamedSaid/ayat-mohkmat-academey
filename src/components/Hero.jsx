import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { BookOpen, Mic, ScrollText, Award } from 'lucide-react'
import { getWhatsAppLink } from '../constants'

const Hero = () => {
  const { t, i18n } = useTranslation()

  const whatsappLink = getWhatsAppLink(i18n.language)

  const features = [
    { icon: BookOpen, key: 'hero.feature_hifz' },
    { icon: Mic, key: 'hero.feature_tilawa' },
    { icon: ScrollText, key: 'hero.feature_tajweed' },
    { icon: Award, key: 'hero.feature_ijaza' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  }

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden text-forest-950">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c9a227\' fill-opacity=\'0.5\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl w-full mx-auto px-4 py-24 md:py-32">
        <div className="w-full flex flex-col md:flex-row-reverse gap-12 items-center justify-between">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex items-center justify-center relative">
            <div className="absolute w-80 h-80 bg-forest-100/50 rounded-full blur-3xl"></div>
            <div className="relative animate-float">
              <img src="/assets/images/full-logo-1.png" alt="Ayat Muhkamat Logo" className="w-56 md:w-80 h-56 md:h-80 object-contain" />
            </div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-2xl space-y-5 md:space-y-9 text-center md:text-start">

            <motion.h1 variants={itemVariants} className="font-display text-4xl md:text-6xl text-forest-950 leading-10">
              {t('hero.headline_main')}
            </motion.h1>

            <motion.p variants={itemVariants} className="font-body text-xl md:text-2xl text-forest-700 max-w-xl">
              {t('hero.headline_sub')}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center md:justify-start">
              {features.map((feature, index) => (
                <div key={index} className="bg-forest-50 text-forest-950 border border-forest-200 rounded-full px-2 md:px-4 py-1 md:py-2 flex items-center gap-2">
                  <feature.icon size={18} className="text-gold-400" />
                  <span className="font-body font-medium text-sm md:text-lg">{t(feature.key)}</span>
                </div>
              ))}
            </motion.div>

            <motion.a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-gold-400 text-forest-950 hover:bg-gold-300 px-8 py-4 rounded-full font-body font-bold text-lg transition-colors shadow-gold-glow cursor-pointer">
              {t('hero.cta_primary')}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero