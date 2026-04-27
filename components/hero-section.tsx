"use client"

import Link from "next/link"
import Image from "next/image"

function MerlosLogo() {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      {/* Icon */}
      <div className="w-30 h-20 md:w-28 md:h-28 lg:w-32 lg:h-50 rounded-2xl md:rounded-3xl  flex items-center justify-center ">
        <Image src="/logo.png" alt="Merlos Logo" width={128} height={128} className="w-full h-full object-contain" />
      </div>
      {/* Text */}
      <div className="flex flex-col">
        <span style={{ fontFamily: 'Cal Sans, sans-serif' }} className="font-bold text-4xl md:text-6xl lg:text-7xl text-foreground tracking-wide">
          merlos
        </span>
        <span className="text-muted-foreground text-sm md:text-base lg:text-lg tracking-widest">
          consultoria empresarial
        </span>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background border-b border-white/10">
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none z-5" />
      {/* Forum Button - Top Right */}
      <Link
        href="#"
        className="absolute top-6 right-4 md:right-8 z-20 flex items-center gap-3 px-5 py-3 border-2 border-foreground rounded-xl hover:bg-foreground/5 transition-colors"
      >
        <span className="font-display text-foreground text-sm tracking-wider">FÓRUM</span>
      </Link>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content - Left Side */}
          <div className="flex flex-col gap-8 md:gap-10 lg:w-[35%]">
            {/* Logo */}
            <MerlosLogo />

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 max-w-sm mt-4">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-display text-sm md:text-base tracking-wider rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
              >
                FALAR COM UM REPRESENTANTE
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground text-foreground font-display text-sm md:text-base tracking-wider rounded-lg hover:bg-foreground/5 transition-colors"
              >
                QUERO MEU CRESCIMENTO PRA JÁ!
              </Link>
            </div>
          </div>

          {/* Hero Image - Robotic Hand - Right Side, larger and overflowing for click effect */}
          <div className="relative w-full h-0 overflow-visible">
            <div 
              className="absolute right-[-30%] top-1/2 w-[138%] max-w-none aspect-[3/4]"
              style={{ transform: 'translateY(-33%) rotate(-40deg) scale(1.5)' }}
            >
              <Image
                src="https://7zcwltqsztizihcd.public.blob.vercel-storage.com/Design%20sem%20nome%20%281%29.png"
                alt="Mão robótica representando inovação e tecnologia"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
