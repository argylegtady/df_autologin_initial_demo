import type { PlasmoCSConfig } from "plasmo"

import { sendToBackground } from "@plasmohq/messaging"
import { relay } from "@plasmohq/messaging/relay"

export const config: PlasmoCSConfig = {
  matches: ["https://nademo.dayforcehcm.com/MyDayforce/Mydayforce.aspx"]
}

relay(
  {
    name: "open-extension" as const
  },
  async (req) => {
    const openResult = await sendToBackground(req)
    return openResult
  }
)
