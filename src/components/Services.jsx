import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { BookOpen, Mic, ScrollText, Award } from 'lucide-react'

const Services = () => {
  const { t } = useTranslation()

  const services = [
    { icon: BookOpen, title: 'services.card1_title', body: 'services.card1_body', accent: 'forest-600' },
    { icon: Mic, title: 'services.card2_title', body: 'services.card2_body', accent: 'gold-600' },
    { icon: ScrollText, title: 'services.card3_title', body: 'services.card3_body', accent: 'forest-500' },
    { icon: Award, title: 'services.card4_title', body: 'services.card4_body', accent: 'gold-500' },
  ]

  return (
    <section id="services" className="py-24 bg-parchment-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-ink-800 mb-4">{t('services.headline')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.1 }} whileHover={{ y: -4 }} className="bg-white rounded-2xl p-8 shadow-card border border-parchment-300 hover:shadow-lg transition-all">
              <div className={`h-1 w-16 bg-${service.accent} rounded-full mb-4`}></div>
              <div className={`w-14 h-14 bg-${service.accent}/10 rounded-xl flex items-center justify-center mb-4`}>
                <service.icon size={28} className={`text-${service.accent}`} />
              </div>
              <h3 className="font-display text-xl font-bold text-ink-800 mb-3">{t(service.title)}</h3>
              <p className="font-body text-ink-500 leading-relaxed">{t(service.body)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services