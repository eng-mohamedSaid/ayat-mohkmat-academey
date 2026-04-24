export const WhatsAppNumber = '+966554877341'

export const WhatsAppMessage = (lang) => encodeURIComponent(
  lang === 'ar'
    ? 'السلام عليكم أنا مهتم بالتسجيل في أكاديمية آيات محكمات. أرجو التواصل معي لحجز الحصة التجريبية المجانية.'
    : 'Assalam alykom, I\'m interested in enrolling at Ayat Muhkumat Academy. Please contact me to book my free trial session.'
)

export const getWhatsAppLink = (lang) =>
  `https://wa.me/${WhatsAppNumber}?text=${WhatsAppMessage(lang)}`