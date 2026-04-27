"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import type { Service } from "@/lib/services-data"

interface Avaliacao {
  id: string
  servico_slug: string
  autor: string
  texto: string
  nota: number
  criado_em: string
}

interface Projeto {
  id: string
  servico_slug: string
  titulo: string
  descricao: string | null
  imagem_url: string | null
  link_externo: string | null
  criado_em: string
}

interface ServicePageClientProps {
  service: Service
  heroImage: string
  title: { small: string; large: string }
  avaliacoes: Avaliacao[]
  projetos: Projeto[]
  otherServices: Service[]
  slug: string
}

function MerlosLogoSmall() {
  return (
    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl  flex items-center justify-center overflow-hidden">
      <Image src="/logo.png" alt="Merlos Logo" width={56} height={56} className="w-full h-full object-contain" />
    </div>
  )
}

export function ServicePageClient({
  service,
  heroImage,
  title,
  avaliacoes,
  projetos,
  otherServices,
  slug,
}: ServicePageClientProps) {
  const [activeTab, setActiveTab] = useState<"avaliacoes" | "projetos" | "ferramentas">("ferramentas")

  const tabs = [
    { id: "avaliacoes" as const, label: "Avaliações" },
    { id: "projetos" as const, label: "Projetos" },
    { id: "ferramentas" as const, label: "Outras ferramentas" },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/">
            <MerlosLogoSmall />
          </Link>
          <Link
            href="/servicos"
            className="px-6 py-2.5 bg-primary text-primary-foreground font-display text-sm tracking-wider rounded-lg hover:bg-primary/90 transition-colors"
          >
            Voltar
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left - Image with dashed border */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
                {/* Dashed border decoration - angled */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none" 
                  viewBox="0 0 400 400"
                  style={{ transform: 'rotate(5deg)' }}
                >
                  <rect
                    x="30"
                    y="30"
                    width="340"
                    height="340"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    strokeDasharray="16 12"
                    rx="24"
                  />
                </svg>
                
                <Image
                  src={heroImage}
                  alt={service.title}
                  fill
                  className="object-contain z-10"
                  priority
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex flex-col">
              {/* Badge and Title */}
              <div className="mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-4 overflow-hidden">
                  <Image src="/logo.png" alt="Merlos Logo" width={40} height={40} className="w-full h-full object-contain" />
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight whitespace-pre-line">
                  {title.large}
                </h1>
              </div>

              {/* CTA Button */}
              <Link
                href="/contato"
                className="inline-flex items-center justify-center w-fit px-8 py-4 bg-white text-background font-display text-sm tracking-wider rounded-lg hover:bg-white/90 transition-colors mb-8"
              >
                Entrar em contato
              </Link>

              {/* Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.longDescription}
                </p>
                <div>
                  <p className="text-foreground/50 text-sm mb-2">Profissionais:</p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 border-2 border-background"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-4 font-medium text-sm md:text-base transition-colors ${
                  activeTab === tab.id 
                    ? "text-foreground" 
                    : "text-foreground/50 hover:text-foreground/70"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Avaliações Tab */}
          {activeTab === "avaliacoes" && (
            <div className="animate-in fade-in duration-300">
              {avaliacoes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {avaliacoes.map((avaliacao) => (
                    <div
                      key={avaliacao.id}
                      className="bg-card/20 border border-white/10 rounded-2xl p-6"
                    >
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < avaliacao.nota
                                ? "text-primary fill-primary"
                                : "text-foreground/20"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-foreground/80 leading-relaxed mb-5 text-lg">
                        {`"${avaliacao.texto}"`}
                      </p>
                      <p className="text-foreground/50 text-md font-medium">
                        {avaliacao.autor}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-foreground/50">Nenhuma avaliação ainda.</p>
                </div>
              )}
            </div>
          )}

          {/* Projetos Tab */}
          {activeTab === "projetos" && (
            <div className="animate-in fade-in duration-300">
              {projetos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {projetos.map((projeto) => (
                    <div
                      key={projeto.id}
                      className="group bg-card/50 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={projeto.imagem_url || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"}
                          alt={projeto.titulo}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-display text-lg text-foreground mb-2 tracking-wide">
                          {projeto.titulo.toUpperCase()}
                        </h3>
                        <p className="text-foreground/60 text-sm leading-relaxed">
                          {projeto.descricao}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-foreground/50">Nenhum projeto ainda.</p>
                </div>
              )}
            </div>
          )}

          {/* Outras Ferramentas Tab */}
          {activeTab === "ferramentas" && (
            <div className="animate-in fade-in duration-300">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
                {otherServices.map((s) => (
                  <ServiceCard
                    key={s.slug}
                    service={s}
                    isCompact
                    className="w-58 md:w-72 h-80 md:h-100"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 tracking-wide">
              PRONTO PARA COMEÇAR?
            </h2>
            <p className="text-foreground/60 text-base mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar sua
              empresa a alcançar resultados extraordinários.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-wider rounded-lg hover:bg-primary/90 transition-colors"
            >
              SOLICITAR PROPOSTA
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
