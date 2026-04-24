import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MessageCircle, Ear, Rocket } from 'lucide-react'

const HowItWorks = () => {
  const { t } = useTranslation()

  const steps = [
    { icon: MessageCircle, title: 'how_it_works.step1_title', body: 'how_it_works.step1_body', number: '01' },
    { icon: Ear, title: 'how_it_works.step2_title', body: 'how_it_works.step2_body', number: '02' },
    { icon: Rocket, title: 'how_it_works.step3_title', body: 'how_it_works.step3_body', number: '03' },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">{t('how_it_works.headline')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.1 }} className="text-center">
              <div className="w-16 h-16 bg-forest-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <step.icon size={32} className="text-gold-400" />
              </div>
              <div className='flex items-center justify-center gap-2 mb-2'>
                <div className="w-6 h-6 bg-gold-500 text-forest-950 font-bold text-sm flex items-center justify-center rounded-full">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-bold text-white">{t(step.title)}</h3>
              </div>
              <p className="font-body text-forest-100">{t(step.body)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks