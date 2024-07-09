import wretch from "wretch"

import { env } from "@/env.mjs"

const apiUrl = env.GH_API_URL

// Instantiate and configure wretch
const api = wretch(apiUrl, {
  cache: "no-store",
  mode: "cors",
})
  .errorType("json")
  .resolve((r) => r.json())

// Fetch my pinned repository
export const getRepo = async () => {
  try {
    const data =  await api.get("/?username=tanishq5414")
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    return { error: "Failed fetching data" }
  }
}
