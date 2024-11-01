import { HeroHeader, ContentSection } from "@/types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `Transforming Agriculture with Data-Driven Insights`,
  subheader: `Empowering farmers to enhance productivity, sustainability, and profitability through intelligent, science-backed solutions.`,
  image: `/hero-img.png`,
}

export const featureCards: ContentSection = {
  header: `Powered by`,
  subheader: `Technology behind The Digital Agronomist`,
  content: [
    {
      text: `Data Science & Machine Learning`,
      subtext: `Transforming agricultural data into actionable insights through advanced analytics`,
      icon: "diagram",
    },
    {
      text: `Cloud Infrastructure`,
      subtext: `Empowering smart, scalable insights through cloud computing`,
      icon: "server",
    },
    {
      text: `Predictive Analytics`,
      subtext: `Leveraging data to maximize crop yields and optimize farm operations`,
      icon: "crop",
    },
  ],
}

export const features: ContentSection = {
  header: `Features`,
  subheader: `Why choose The Digital Agronomist?`,
  image: `/features-img.png`,
  content: [
    {
      text: `Smart Crop Management`,
      subtext: `Optimize nutrient levels and monitor crop health in real-time`,
      icon: "plant",
    },
    {
      text: `Sustainability Insights`,
      subtext: `Reduce resource use and enhance environmental outcomes`,
      icon: "mountains",
    },
    {
      text: `Profitability Forecasts`,
      subtext: `Boost farm profitability with precise, data-driven insights`,
      icon: "tractor",
    },
  ],
}
