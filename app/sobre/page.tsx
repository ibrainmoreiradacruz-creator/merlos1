import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Award, Lightbulb, Target } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Sobre Nós | Merlos Consultoria Empresarial",
  description:
    "Conheça a Merlos Consultoria Empresarial. Mais de 10 anos transformando negócios e gerando resultados extraordinários.",
}

const valores = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description:
      "Todas as nossas ações são direcionadas para gerar resultados mensuráveis e impactantes para o seu negócio.",
  },
  {
    icon: Lightbulb,
    title: "Inovação Constante",
    description:
      "Estamos sempre atualizados com as últimas tendências e tecnologias para oferecer soluções de ponta.",
  },
  {
    icon: Users,
    title: "Parceria Real",
    description:
      "Trabalhamos lado a lado com nossos clientes, construindo relacionamentos baseados em confiança e transparência.",
  },
  {
    icon: Award,
    title: "Excelência",
    description:
      "Buscamos a excelência em tudo que fazemos, desde o primeiro contato até a entrega final do projeto.",
  },
]

const equipe = [
  {
    nome: "Carlos Merlos",
    cargo: "CEO & Fundador",
    descricao:
      "Mais de 15 anos de experiência em consultoria empresarial e desenvolvimento de negócios.",
  },
  {
    nome: "Ana Paula Silva",
    cargo: "Diretora de Marketing",
    descricao:
      "Especialista em estratégias digitais com passagem por grandes agências e empresas de tecnologia.",
  },
  {
    nome: "Ricardo Santos",
    cargo: "Head de Vendas",
    descricao:
      "Consultor certificado com expertise em treinamento de equipes comerciais de alta performance.",
  },
]

export default function SobrePage() {
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
                  Sobre Nós
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 mb-6 tracking-wide">
                  <span className="text-balance">
                    TRANSFORMANDO <span className="text-primary">NEGÓCIOS</span>{" "}
                    DESDE 2014
                  </span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
                  Somos uma consultoria empresarial apaixonada por resultados.
                  Nossa missão é impulsionar o crescimento de empresas através de
                  estratégias inovadoras e execução impecável.
                </p>

                <div className="flex flex-wrap gap-8 md:gap-12 pt-6 border-t border-border">
                  <div>
                    <p className="font-display text-3xl md:text-4xl text-primary">+10</p>
                    <p className="text-muted-foreground text-sm">Anos no Mercado</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl md:text-4xl text-primary">+150</p>
                    <p className="text-muted-foreground text-sm">Projetos Entregues</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl md:text-4xl text-primary">+50</p>
                    <p className="text-muted-foreground text-sm">Clientes Ativos</p>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TM7Eo8wzAFhObVRn21cY9KDV888LD1.png"
                    alt="Torre de xadrez representando estratégia"
                    fill
                    className="object-contain relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missão e Visão */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 tracking-wide">
                  NOSSA MISSÃO
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Transformar empresas em organizações de alta performance,
                  através de estratégias personalizadas que geram resultados
                  sustentáveis e impactantes no mercado.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 tracking-wide">
                  NOSSA VISÃO
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ser a consultoria de referência no Brasil em transformação
                  empresarial, reconhecida pela excelência, inovação e resultados
                  extraordinários entregues aos nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Nossos Valores
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-4 tracking-wide">
                O QUE NOS MOVE
              </h2>
              <p className="text-muted-foreground text-lg">
                Nossos valores guiam todas as nossas decisões e definem a forma
                como trabalhamos com nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valores.map((valor) => (
                <div
                  key={valor.title}
                  className="bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <valor.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2 tracking-wide">
                    {valor.title.toUpperCase()}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Nossa Equipe
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-4 tracking-wide">
                CONHEÇA QUEM FAZ ACONTECER
              </h2>
              <p className="text-muted-foreground text-lg">
                Profissionais experientes e apaixonados por transformar negócios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {equipe.map((membro) => (
                <div
                  key={membro.nome}
                  className="bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl text-primary">
                      {membro.nome
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-1 tracking-wide">
                    {membro.nome.toUpperCase()}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {membro.cargo}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {membro.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-3xl p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4 tracking-wide">
                VAMOS TRABALHAR JUNTOS?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato e descubra como podemos ajudar sua empresa a
                alcançar novos patamares de sucesso.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base"
              >
                <Link href="/contato">
                  Fale Conosco
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
