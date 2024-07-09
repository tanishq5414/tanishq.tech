import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Tanishq Agarwal",
  author: "Tanishq Agarwal",
  description: "Tanishq Agarwal's personal website. A software developer from India.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.png`,
  links: {
    github: "https://github.com/tanishq5414",
    twitter: "https://twitter.com/tvnishq",
    linkedin: "https://www.linkedin.com/in/tanishqagarwal"
  },
}
