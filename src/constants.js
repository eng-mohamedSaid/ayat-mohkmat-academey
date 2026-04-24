export const WhatsAppNumber = '+966554877341'
export const WhatsAppNumberFormatted = '+966 544 877 341'
export const FacebookPage = 'https://www.facebook.com/people/%D8%A1%D8%A7%D9%8A%D8%A7%D8%AA%D9%8C-%D9%85%D8%AD%D9%83%D9%85%D8%A7%D8%AA/61560144935392/'

export const WhatsAppMessage = (lang) => encodeURIComponent(
  lang === 'ar'
    ? 'السلام عليكم أنا مهتم بالتسجيل في أكاديمية آيات محكمات. أرجو التواصل معي لحجز الحصة التجريبية المجانية.'
    : 'Assalam alykom, I\'m interested in enrolling at Ayat Muhkumat Academy. Please contact me to book my free trial session.'
)

export const getWhatsAppLink = (lang) =>
  `https://wa.me/${WhatsAppNumber}?text=${WhatsAppMessage(lang)}`