import Link from "next/link"
import Image from "next/image"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-[#0a1628] to-[#1a0a28] border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 tracking-wide leading-tight">
                PRONTO PARA{" "}
                <span className="text-primary">TRANSFORMAR</span>{" "}
                SEU NEGÓCIO?
              </h2>
              <p className="text-foreground/60 text-base md:text-lg leading-relaxed mb-8">
                Entre em contato conosco e descubra como podemos ajudar sua
                empresa a alcançar novos patamares de sucesso. Nossa equipe está
                pronta para entender suas necessidades e criar soluções sob
                medida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contato"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-wider rounded-lg hover:bg-primary/90 transition-colors"
                >
                  AGENDAR CONVERSA
                </Link>
                <Link 
                  href="/servicos"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground text-foreground font-display text-sm tracking-wider rounded-lg hover:bg-foreground/5 transition-colors"
                >
                  VER SERVIÇOS
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rzApbSF2sEK2Jew7vhg6MXYEoBR5Fo.png"
                  alt="Foguete representando crescimento e inovação"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
