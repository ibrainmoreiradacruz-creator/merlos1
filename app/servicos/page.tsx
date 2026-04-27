import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { CTASection } from "@/components/cta-section"
import { services } from "@/lib/services-data"

export const metadata = {
  title: "Nossos Serviços | Merlos Consultoria Empresarial",
  description:
    "Conheça nossos serviços de consultoria em vendas, marketing digital, desenvolvimento de sites, estratégia e rebranding.",
}

export default function ServicosPage() {
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
                  Nossos Serviços
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 mb-6 tracking-wide">
                  <span className="text-balance">
                    SOLUÇÕES <span className="text-primary">COMPLETAS</span> PARA
                    SEU NEGÓCIO
                  </span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                  Oferecemos um portfólio diversificado de serviços para atender
                  todas as necessidades da sua empresa. Do estratégico ao
                  operacional, estamos prontos para impulsionar seus resultados.
                </p>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                  <Image
                    src="/diamante2.png"
                    alt="Diamante representando excelência"
                    fill
                    className="object-contain relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
