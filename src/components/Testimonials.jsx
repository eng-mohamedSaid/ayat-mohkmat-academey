'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronRight, ChevronLeft } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonials = () => {
  const swiperRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: 'عمر سعيد',
      role: 'طالبة',
      rating: 5,
      quote: `السلام عليكم ورحمة الله وبركاته. شكراً جزيلاً على هذه الأكاديمية الرائعة. اشتراكي فيها غيّر مستوى حفظي تماماً، والحمد لله. كان لدي تجارب سابقة لكن لم أجد هذا النظام المميز في المراجعة والتكرار. الشيخ إسلام يتابع كل طالب بعناية فائقة. جزاكم الله خيراً وبارك في جهودكم.`,
    },
    {
      id: 2,
      name: 'أحمد عليوة',
      role: 'طالب',
      rating: 5,
      quote: `أكاديمية ممتازة جداً. المعلم فاضل وصبور جداً. الحفظ يتم بدقة عالية مع تكرارات منتظمة ومراجعة دورية. يركز الشيخ إسلام على تصحيح الأخطاء بلطف وصبر. أشعر بتحسن واضح في مستواي والتزامي بالحفظ.`,
    },
    {
      id: 3,
      name: 'أم سارة',
      role: 'والدة',
      rating: 5,
      quote: `أتقدم بخالص الشكر والتقدير لأكاديمية آيات محكمات على الجهد العظيم في تحفيظ كتاب الله وتعليم أبنائنا القيم والأخلاق الحميدة. شكر خاص للشيخ الفاضل إسلام على إخلاصه وإتقانه في تحفيظ ابنتي حنين. نسأل الله أن يبارك في هذا العمل الطيب وأن يجعله نوراً لهم وأبنائنا في الدنيا والآخرة.`,
    },
    {
      id: 4,
      name: 'ريما المالكي',
      role: 'والدة',
      rating: 5,
      quote: `فخورة جداً بناتي الغاليات وبإنجازاتهن. حفظهن سورة الانشقاق كاملة إنجاز رائع يدل على اجتهادهن وحرصكم على متابعتهن. استمرن يا بطلات، أنتن أهل القرآن وخاصته. شكراً للشيخ إسلام على الجهد المميز.`,
    },
    {
      id: 5,
      name: 'سارة الدميخي',
      role: 'والدة',
      rating: 5,
      quote: `تحسن واضح جداً في مستوى ابنتي بالقرآن الكريم. الأكاديمية توفر بيئة تعليمية آمنة وداعمة. الشيخ إسلام يتمتع بصبر عظيم وخبرة كبيرة في التدريس. أنصح كل من يرغب في تحفيظ أبنائهم بهذه الأكاديمية.`,
    },
    {
      id: 6,
      name: 'فاطمة عبدالرحمن',
      role: 'والدة',
      rating: 5,
      quote: `تغير مستوى ابنتي في القرآن الكريم بشكل ملحوظ. الأكاديمية توفر متابعة مستمرة وتغذية راجعة فوري. أشعر بالثقة في أن ابنتي تتعلم من معلم متخصص ومخلص. شكراً على هذه الخدمة الرائعة.`,
    },
  ]

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
  }

  const handlePrevious = () => {
    swiperRef.current?.swiper?.slidePrev()
  }

  const handleNext = () => {
    swiperRef.current?.swiper?.slideNext()
  }

  return (
    <section id="testimonials" className="py-24 bg-parchment-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink-800 mb-4">
            آراء طالباتنا وأمهاتنا
          </h2>
          <p className="max-w-2xl mx-auto font-body text-lg text-ink-600">
            تجارب صادقة وحقيقية من طلبة وأسر استفادوا من برامج أكاديمية آيات محكمات
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            a11y={{
              enabled: true,
              prevSlideMessage: 'الشهادة السابقة',
              nextSlideMessage: 'الشهادة التالية',
            }}
            className="pb-16"
            dir="rtl"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-8 shadow-card border border-parchment-300 h-full flex flex-col hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-gold-400 fill-gold-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-body text-ink-600 leading-relaxed mb-6 flex-grow text-right">
                    "{testimonial.quote}"
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-parchment-200 my-4"></div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div>
                      <h4 className="font-body font-semibold text-ink-800 text-right">
                        {testimonial.name}
                      </h4>
                      <p className="font-body text-sm text-gold-700 text-right">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-forest-500 rounded-full flex items-center justify-center font-body font-bold text-white text-lg flex-shrink-0">
                      {getInitials(testimonial.name)}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex gap-3 justify-center mt-8">
            <button
              onClick={handlePrevious}
              aria-label="السابق"
              className="p-3 rounded-full bg-white border-2 border-gold-400 text-gold-600 hover:bg-gold-50 transition-all duration-300 hover:border-gold-600 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              aria-label="التالي"
              className="p-3 rounded-full bg-white border-2 border-gold-400 text-gold-600 hover:bg-gold-50 transition-all duration-300 hover:border-gold-600 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Swiper Pagination Styling */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: #d4af6d !important;
          opacity: 0.5 !important;
          width: 10px !important;
          height: 10px !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          background-color: #d4af6d !important;
        }
      `}</style>
    </section>
  )
}

export default Testimonials