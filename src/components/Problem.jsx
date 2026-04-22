import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Search, XCircle, ClipboardCheck, Clock } from 'lucide-react'

const Problem = () => {
  const { t } = useTranslation()

  const problems = [
    { icon: Search, title: 'problem.card1_title', body: 'problem.card1_body' },
    { icon: XCircle, title: 'problem.card2_title', body: 'problem.card2_body' },
    { icon: ClipboardCheck, title: 'problem.card3_title', body: 'problem.card3_body' },
    { icon: Clock, title: 'problem.card4_title', body: 'problem.card4_body' },
  ]

  return (
    <section id="problem" className="py-24 bg-parchment-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-ink-800 mb-4">{t('problem.section_label')}</h2>
          <p className="font-body text-lg text-ink-500 max-w-2xl mx-auto">{t('problem.intro')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-card border border-parchment-300">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <problem.icon size={24} className="text-red-500" />
              </div>
              <h3 className="font-body font-semibold text-lg text-ink-800 mb-2">{t(problem.title)}</h3>
              <p className="font-body text-ink-500">{t(problem.body)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }} className="text-center mt-12">
          <p className="font-display text-xl md:text-2xl text-forest-700 italic max-w-3xl mx-auto">{t('problem.bridge')}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Problem