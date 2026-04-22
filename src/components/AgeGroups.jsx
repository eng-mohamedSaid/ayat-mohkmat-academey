import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const AgeGroups = () => {
  const { t } = useTranslation()

  const groups = [
    { icon: '👦', title: 'age_groups.card1_title', age: 'age_groups.card1_age', body: 'age_groups.card1_body', badge: 'age_groups.card1_badge', badgeColor: 'bg-gold-500 text-forest-950' },
    { icon: '👨', title: 'age_groups.card2_title', age: 'age_groups.card2_age', body: 'age_groups.card2_body', badge: 'age_groups.card2_badge', badgeColor: 'bg-forest-600 text-forest-100' },
    { icon: '👴', title: 'age_groups.card3_title', age: 'age_groups.card3_age', body: 'age_groups.card3_body', badge: 'age_groups.card3_badge', badgeColor: 'bg-forest-700 text-forest-100' },
  ]

  return (
    <section id="age-groups" className="py-24 bg-parchment-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-ink-800 mb-4">{t('age_groups.headline')}</h2>
          <p className="font-body text-lg text-ink-500 max-w-2xl mx-auto">{t('age_groups.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-card border border-parchment-300">
              <div className="text-5xl mb-4">{group.icon}</div>
              <span className={`inline-block ${group.badgeColor} text-sm font-body font-semibold px-3 py-1 rounded-full mb-3`}>
                {t(group.badge)}
              </span>
              <h3 className="font-display text-xl font-bold text-ink-800 mb-2">{t(group.title)}</h3>
              <p className="font-body text-gold-600 font-semibold mb-3">{t(group.age)}</p>
              <p className="font-body text-ink-500">{t(group.body)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AgeGroups