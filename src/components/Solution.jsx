import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const Solution = () => {
  const { t } = useTranslation()

  const items = [
    'solution.item1',
    'solution.item2',
    'solution.item3',
    'solution.item4',
    'solution.item5',
  ]

  return (
    <section id="solution" className="py-24 bg-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">{t('solution.headline')}</h2>
          <p className="font-body text-xl text-forest-100 max-w-2xl mx-auto">{t('solution.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.1 }} className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gold-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Check size={18} className="text-gold-400" />
              </div>
              <p className="font-body text-forest-100">{t(item)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }} className="text-center mt-12">
          <p className="font-display text-xl md:text-2xl text-gold-300 italic">{t('solution.closing')}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Solution