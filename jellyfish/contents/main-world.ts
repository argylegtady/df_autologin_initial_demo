import type { PlasmoCSConfig } from "plasmo"

import { sendToBackgroundViaRelay } from "@plasmohq/messaging"

export const config: PlasmoCSConfig = {
  matches: ["https://nademo.dayforcehcm.com/MyDayforce/Mydayforce.aspx"],
  run_at: "document_start",
  world: "MAIN"
}

window.relay = {
  description: "Message from content script in main world",
  tryRelay: async () => {
    let result = await sendToBackgroundViaRelay({
      name: "open-extension"
    })
    return result
  }
}
