import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const { t } = useTranslation()

  const testimonials = [
    { name: 'testimonials.t1_name', role: 'testimonials.t1_role', quote: 'testimonials.t1_quote', location: 'testimonials.t1_location', flag: '🇦🇪' },
    { name: 'testimonials.t2_name', role: 'testimonials.t2_role', quote: 'testimonials.t2_quote', location: 'testimonials.t2_location', flag: '🇩🇪' },
    { name: 'testimonials.t3_name', role: 'testimonials.t3_role', quote: 'testimonials.t3_quote', location: 'testimonials.t3_location', flag: '🇬🇧' },
  ]

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2)
  }

  return (
    <section id="testimonials" className="py-24 bg-parchment-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-ink-800 mb-4">{t('testimonials.headline')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-card border border-parchment-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-forest-100 text-forest-800 rounded-full flex items-center justify-center font-body font-bold">
                  {getInitials(t(testimonial.name))}
                </div>
                <div>
                  <h4 className="font-body font-semibold text-ink-800">{t(testimonial.name)}</h4>
                  <p className="font-body text-sm text-ink-500">{t(testimonial.role)}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold-400 fill-gold-400" />
                ))}
              </div>
              <p className="font-body text-ink-600 italic mb-4">"{t(testimonial.quote)}"</p>
              <p className="font-body text-sm text-ink-500">{testimonial.flag} {t(testimonial.location)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials