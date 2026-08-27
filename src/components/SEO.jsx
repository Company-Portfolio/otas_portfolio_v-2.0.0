import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function SEO({
  title,
  description,
  canonicalUrl,
  ogImage = "https://otastechsolutions.com/images/HeroBanner.png",
  ogType = "website",
  schema
}) {
  const location = useLocation()
  const currentUrl = canonicalUrl || `https://otastechsolutions.com${location.pathname}`
  const fullTitle = title
    ? `${title} | OTAS Tech Solutions`
    : "OTAS Tech Solutions - AI Automation & Custom Software Development in Myanmar"

  const defaultDescription =
    "OTAS Tech Solutions - မြန်မာနိုင်ငံရှိ လုပ်ငန်းရှင်များအတွက် AI Agent Automation၊ Custom Software Development၊ Business Website နှင့် Branding နည်းပညာဝန်ဆောင်မှုများ။"

  const finalDescription = description || defaultDescription

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle

    // Helper to update or create meta tag
    const updateMetaTag = (selector, attributeName, attributeValue, content) => {
      let element = document.querySelector(selector)
      if (!element) {
        element = document.createElement("meta")
        element.setAttribute(attributeName, attributeValue)
        document.head.appendChild(element)
      }
      element.setAttribute("content", content)
    }

    // 2. Update Standard Meta Description
    updateMetaTag('meta[name="description"]', "name", "description", finalDescription)

    // 3. Update Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]')
    if (!canonicalTag) {
      canonicalTag = document.createElement("link")
      canonicalTag.setAttribute("rel", "canonical")
      document.head.appendChild(canonicalTag)
    }
    canonicalTag.setAttribute("href", currentUrl)

    // 4. Update OpenGraph Tags
    updateMetaTag('meta[property="og:title"]', "property", "og:title", fullTitle)
    updateMetaTag('meta[property="og:description"]', "property", "og:description", finalDescription)
    updateMetaTag('meta[property="og:url"]', "property", "og:url", currentUrl)
    updateMetaTag('meta[property="og:type"]', "property", "og:type", ogType)
    updateMetaTag('meta[property="og:image"]', "property", "og:image", ogImage)
    updateMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "OTAS Tech Solutions")

    // 5. Update Twitter Card Tags
    updateMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image")
    updateMetaTag('meta[name="twitter:title"]', "name", "twitter:title", fullTitle)
    updateMetaTag('meta[name="twitter:description"]', "name", "twitter:description", finalDescription)
    updateMetaTag('meta[name="twitter:image"]', "name", "twitter:image", ogImage)

    // 6. Inject Schema if provided
    let schemaScript = document.getElementById("dynamic-page-schema")
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement("script")
        schemaScript.id = "dynamic-page-schema"
        schemaScript.type = "application/ld+json"
        document.head.appendChild(schemaScript)
      }
      schemaScript.textContent = JSON.stringify(schema)
    } else if (schemaScript) {
      schemaScript.remove()
    }
  }, [fullTitle, finalDescription, currentUrl, ogImage, ogType, schema])

  return null
}
