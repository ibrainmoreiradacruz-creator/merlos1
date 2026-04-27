"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@merlos.com.br",
    href: "mailto:contato@merlos.com.br",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 99999-9999",
    href: "tel:+5511999999999",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, SP - Brasil",
    href: null,
  },
]

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Contato
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 mb-6 tracking-wide">
                  <span className="text-balance">
                    VAMOS <span className="text-primary">CONVERSAR</span>?
                  </span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
                  Estamos prontos para entender suas necessidades e criar
                  soluções personalizadas para o seu negócio. Entre em contato e
                  dê o primeiro passo rumo ao sucesso.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q72H1GtPGQhFA1OApeqndYJzhREGRu.png"
                    alt="Lâmpada representando ideias"
                    fill
                    className="object-contain relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulário */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 tracking-wide">
                      MENSAGEM ENVIADA!
                    </h2>
                    <p className="text-muted-foreground">
                      Obrigado pelo contato. Nossa equipe retornará em breve.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2 tracking-wide">
                      ENVIE SUA MENSAGEM
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Preencha o formulário abaixo e entraremos em contato.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nome">Nome completo</Label>
                          <Input
                            id="nome"
                            name="nome"
                            placeholder="Seu nome"
                            required
                            className="bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="empresa">Empresa</Label>
                          <Input
                            id="empresa"
                            name="empresa"
                            placeholder="Nome da empresa"
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="seu@email.com"
                            required
                            className="bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefone">Telefone</Label>
                          <Input
                            id="telefone"
                            name="telefone"
                            type="tel"
                            placeholder="(11) 99999-9999"
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="assunto">Assunto</Label>
                        <Input
                          id="assunto"
                          name="assunto"
                          placeholder="Qual serviço você tem interesse?"
                          required
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mensagem">Mensagem</Label>
                        <textarea
                          id="mensagem"
                          name="mensagem"
                          rows={5}
                          placeholder="Conte-nos mais sobre seu projeto ou necessidade..."
                          required
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full text-base"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            Enviar Mensagem
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
