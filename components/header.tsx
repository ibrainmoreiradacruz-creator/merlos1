"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
]

function MerlosLogoSmall() {
  return (
    <Link href="/" className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center hover:border-primary transition-colors overflow-hidden">
      <Image src="/logo.png" alt="Merlos Logo" width={60} height={60} className="w-full h-full object-contain" />
    </Link>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <MerlosLogoSmall />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/contato"
              className="px-6 py-2.5 bg-primary text-primary-foreground font-display text-sm tracking-wider rounded-lg hover:bg-primary/90 transition-colors"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/70 hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/contato" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-6 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider rounded-lg hover:bg-primary/90 transition-colors text-center"
              >
                Fale Conosco
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
