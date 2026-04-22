import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Users, Heart, GraduationCap, TrendingUp, FileText, Award } from 'lucide-react'

const WhyUs = () => {
  const { t } = useTranslation()

  const reasons = [
    { icon: Users, text: 'why_us.item1' },
    { icon: Heart, text: 'why_us.item2' },
    { icon: GraduationCap, text: 'why_us.item3' },
    { icon: TrendingUp, text: 'why_us.item4' },
    { icon: FileText, text: 'why_us.item5' },
    { icon: Award, text: 'why_us.item6' },
  ]

  return (
    <section id="about" className="py-24 bg-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">{t('why_us.headline')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.1 }} className="flex flex-col items-center text-center gap-3 p-6">
              <div className="w-14 h-14 bg-forest-700 rounded-2xl flex items-center justify-center">
                <reason.icon size={28} className="text-gold-400" />
              </div>
              <p className="font-body text-white font-semibold">{t(reason.text)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs