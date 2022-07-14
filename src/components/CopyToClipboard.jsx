import { useCopyToClipboard } from "../customHooks/useCopyToClipboard"

export default function CopyToClipboardCopmponent() {
  const [copyToClipboard, { success }] = useCopyToClipboard()

  return (
    <>
      <button onClick={() => copyToClipboard("This was copied")}>
        {success ? "Copied" : "Copy Text"}
      </button>
      <input type="text" />
    </>
  )
}
