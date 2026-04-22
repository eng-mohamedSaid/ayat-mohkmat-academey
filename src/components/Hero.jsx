import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { BookOpen, Mic, ScrollText, Award } from 'lucide-react'

const Hero = () => {
  const { t, i18n } = useTranslation()

  const WhatsAppNumber = '+966554875264'
  const message = encodeURIComponent(i18n.language === 'ar'
    ? 'مرحباً، أنا مهتم بالتسجيل في أكاديمية آيات محكمات. أرجو التواصل معي لحجز الحصة التجريبية المجانية.'
    : 'Hello, I\'m interested in enrolling at Ayat Muhkamat Academy. Please contact me to book my free trial session.')
  const whatsappLink = `https://wa.me/${WhatsAppNumber}?text=${message}`

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
    <section className="relative min-h-screen bg-forest-950 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c9a227\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center lg:text-right">
            <motion.div variants={itemVariants} className="inline-block bg-gold-500/20 text-gold-300 border border-gold-500/30 rounded-full px-5 py-2 mb-6">
              {t('hero.badge')}
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              {t('hero.headline_main')}
            </motion.h1>

            <motion.p variants={itemVariants} className="font-body text-xl md:text-2xl text-forest-100 mb-4">
              {t('hero.headline_sub')}
            </motion.p>

            <motion.p variants={itemVariants} className="font-body text-lg text-forest-200 mb-8">
              {t('hero.sheikh_line')}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center lg:justify-end mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-forest-800/50 text-forest-100 border border-forest-700 rounded-full px-4 py-2 flex items-center gap-2">
                  <feature.icon size={18} className="text-gold-400" />
                  <span className="font-body font-medium">{t(feature.key)}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gold-400 text-forest-950 hover:bg-gold-300 px-8 py-4 rounded-full font-body font-bold text-lg transition-colors shadow-gold-glow">
                {t('hero.cta_primary')}
              </a>
              <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="text-gold-300 hover:underline underline-offset-4 font-body font-medium">
                {t('hero.cta_secondary')}
              </button>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:flex items-center justify-center relative">
            <div className="absolute w-80 h-80 bg-forest-700/20 rounded-full blur-3xl"></div>
            <div className="relative animate-float">
              <img src="/full-logo-1.png" alt="Ayat Muhkamat Logo" className="w-80 h-80 object-contain" />
            </div>
            <div className="absolute -top-4 right-0 bg-gold-500 text-forest-950 text-sm font-body font-semibold px-4 py-2 rounded-full">
              {i18n.language === 'ar' ? 'إجازة بالسند المتصل' : 'Ijazah with Connected Chain'}
            </div>
            <div className="absolute top-1/2 -right-8 bg-forest-700 text-forest-100 text-sm font-body font-semibold px-4 py-2 rounded-full">
              {i18n.language === 'ar' ? 'حصص فردية' : 'One-on-one Sessions'}
            </div>
            <div className="absolute -bottom-4 -left-4 bg-forest-700 text-forest-100 text-sm font-body font-semibold px-4 py-2 rounded-full">
              {i18n.language === 'ar' ? 'أي مكان في العالم' : 'Anywhere in the World'}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero