import { useLocalStorage } from "./useStorage";
import * as translations from "../components/Translation/translations";

export const useTranslation = () => {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    "fallbackLanguage",
    "en"
  );

  const t = (text) => {
    const keys = text.split(".");

    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      text
    );
  };

  return {
    language,
    setLanguage,
    setFallbackLanguage,
    t,
  };
};

function getNestedTranslation(language, keys) {
  return keys.reduce((obj, key) => {
    return obj?.[key];
  }, translations[language]);
}
