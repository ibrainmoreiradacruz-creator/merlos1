"use client"

import Link from "next/link"
import Image from "next/image"
import type { Service } from "@/lib/services-data"

const heroImages: Record<string, string> = {
  "excelencia-em-vendas": "/1.png",
  "marketing-digital": "/7.png",
  "desenvolvimento-de-sites": "/6.png",
  "consultoria-estrategica": "/4.png",
  "rebranding-de-marca": "/5.png",
}

// Títulos formatados exatamente como no design
const formattedTitles: Record<string, { small: string; large: string }> = {
  "excelencia-em-vendas": { small: "TREINAMENTO DE", large: "EXCELÊNCIA\nEM\nVENDAS" },
  "marketing-digital": { small: "", large: "Marketing\nDigital" },
  "desenvolvimento-de-sites": {small: "",large: "DESENVOLVIMENTO DE SITES" },
  "consultoria-estrategica": { small: "", large: "CONSULTORIA\nEXTRATÉGICA" },
  "rebranding-de-marca": { small: "", large: "Rebranding\nde Marca" },
}

interface ServiceCardProps {
  service: Service
  isCompact?: boolean
  className?: string
}

export function ServiceCard({ service, isCompact = false, className = "" }: ServiceCardProps) {
  const image = heroImages[service.slug] || heroImages["consultoria-estrategica"]
  const title = formattedTitles[service.slug] || { small: "", large: service.title }

  if (isCompact) {
    return (
      <Link
        href={`/servicos/${service.slug}`}
        className={`group relative flex-shrink-0 w-40 md:w-48 h-56 md:h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#1a0a28] border border-white/10 hover:border-primary/50 transition-all ${className}`}
      >
        {/* Image */}
        <div className="absolute inset-0 flex items-start justify-center">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/servicos/${service.slug}`}
      className={`group relative flex-shrink-0 w-64 md:w-72 h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#1a0a28] border border-white/10 hover:border-primary/50 transition-all ${className}`}
    >
      {/* Dashed border decoration */}
      <svg className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] z-10 pointer-events-none opacity-30">
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="8 8"
          rx="12"
        />
      </svg>
      
      {/* Image */}
      <div className="absolute inset-0 flex items-start justify-center">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </Link>
  )
}
