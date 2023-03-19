import countries from "i18n-iso-countries"

export const formatLanguagesToOptions = (languages) => {
  countries.registerLocale(require("i18n-iso-countries/langs/en.json"))

  const fullNamedLanguages = languages.map(({language}) => {
    try {
      return {
        label: countries.getName(language, "en"),
        value: language,
      }
    } catch {
      return ""
    }
  })

  return fullNamedLanguages.filter(Boolean)
}
