"use client"

import Link from "next/link"
import { services } from "@/lib/services-data"
import { ServiceCard } from "@/components/service-card"

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <p className="text-foreground/70 italic text-lg md:text-xl mb-8">
          Oque você pode contratar
        </p>

        {/* Services Horizontal Scroll */}
        <div className="relative">
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-hide -mx-4 px-1">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>

        {/* Helper text */}
        <p className="text-foreground/50 italic text-sm mt-4 mb-8">
          selecione algum item
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/contato"
            className="group inline-flex items-center gap-5 px-18 py-5 border-2 bg-primary border-primary text-primary-foreground font-display text-xl md:text-2xl tracking-wider rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
          >
            DIAGNÓSTICO ESTRATÉGICO
            {/* Crown decoration */}
            <svg 
              className="w-6 h-6 text-white group-hover:text-primary-foreground transition-colors" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6l3-6z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
