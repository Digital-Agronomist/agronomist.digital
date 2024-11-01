import { SiteConfig, ContactConfig } from "@/types"

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "https://agronomist.digital"

export const siteConfig: SiteConfig = {
  name: "The Digital Agronomist",
  author: "Juan Roa",
  description:
    "Transforming agricultural data into actionable insights through advanced analytics.",
  keywords: [
    "Agronomy",
    "precision agriculture",
    "Machine Learning",
    "Agro Tech",
    "Soil Net LLC",
    "Soil sience",
    "Agriculture",
  ],
  url: {
    base: baseUrl,
    author: "https://juanroa.dev",
  },
  ogImage: `${baseUrl}/og.jpg`,
}

export const contactConfig: ContactConfig = {
  email: "info@agronomist.digital",
}
