"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import TagCloud from "@frank-mayer/react-tag-cloud"

interface IconCloudProps {
  iconSlugs: string[]
}

export function IconCloud({ iconSlugs }: IconCloudProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const [icons, setIcons] = useState<string[]>([])

  useEffect(() => {
    if (isInView) {
      // Load icons when in view
      Promise.all(
        iconSlugs.map(async (slug) => {
          try {
            const response = await fetch(
              `https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/${slug}.svg`
            )
            const svg = await response.text()
            return svg.replace(
              /^<svg /,
              '<svg class="w-8 h-8 text-brand-text/75 dark:text-brand-muted/75 transition-colors duration-300 group-hover:text-brand-primary/75" '
            )
          } catch (error) {
            console.error(`Failed to load icon: ${slug}`, error)
            return null
          }
        })
      ).then((loadedIcons) => {
        setIcons(loadedIcons.filter((icon): icon is string => icon !== null))
      })
    }
  }, [isInView, iconSlugs])

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      {icons.length > 0 && (
        <TagCloud
          options={(w: Window & typeof globalThis) => ({
            radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "fast",
          })}
          onClick={(tag: string, ev: MouseEvent) => console.log(tag)}
          onClickOptions={{ passive: true }}
        >
          {icons}
        </TagCloud>
      )}
    </div>
  )
}