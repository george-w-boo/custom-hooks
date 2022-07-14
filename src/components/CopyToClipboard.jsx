import { useCopyToClipboard } from "../customHooks/useCopyToClipboard"
import Card from "./common/Card"

export default function CopyToClipboardCopmponent() {
  const [copyToClipboard, { success }] = useCopyToClipboard()

  return (
    <Card legend="useCopyToClipBoard">
      <button onClick={() => copyToClipboard("This was copied")}>
        {success ? "Copied" : "Copy Text"}
      </button>
      <input type="text" />
    </Card>
  )
}
