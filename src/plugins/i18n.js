import { createI18n } from 'vue-i18n'
import localesEN from '@/locale/en.json'
import localesUA from '@/locale/ua.json'

const i18n = createI18n({
	locale: process.env.VUE_APP_I18N_LOCALE || 'ua',
	fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ua',
	messages: {
		en: localesEN,
		ua: localesUA,
	},
})

export default i18n
