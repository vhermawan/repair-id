import en from '~/i18n/en'
import id from '~/i18n/id'

const messages: Record<string, Record<string, string>> = { en, id }

export function useI18n() {
  const locale = useState<string>('locale', () => 'en')

  function t(key: string): string {
    return messages[locale.value]?.[key] ?? key
  }

  function setLocale(lang: string) {
    locale.value = lang
  }

  return { locale, t, setLocale }
}
