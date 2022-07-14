import { useTranslation } from "../../customHooks/useTranslation";
import Card from "../common/Card";

export default function TranslationComponent() {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation()

  return (
    <Card legend="useTranslation">
      <div>{language}</div>
      <div>{t("hi")}</div>
      <div>{t("bye")}</div>
      <div>{t("nested.value")}</div>
      <button onClick={() => setLanguage("sp")}>Change To Spanish</button>
      <button onClick={() => setLanguage("en")}>Change To English</button>
      <button onClick={() => setFallbackLanguage("sp")}>Change FB Lang</button>
    </Card>
  )
}
