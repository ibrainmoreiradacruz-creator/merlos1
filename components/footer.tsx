import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  servicos: [
    { href: "/servicos/excelencia-em-vendas", label: "Excelência em Vendas" },
    { href: "/servicos/marketing-digital", label: "Marketing Digital" },
    { href: "/servicos/desenvolvimento-de-sites", label: "Desenvolvimento de Sites" },
    { href: "/servicos/consultoria-estrategica", label: "Consultoria Estratégica" },
    { href: "/servicos/rebranding-de-marca", label: "Rebranding de Marca" },
  ],
  empresa: [
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/contato", label: "Contato" },
    { href: "/politica-de-privacidade", label: "Política de Privacidade" },
  ],
}

const socialLinks = [
  { href: "https://instagram.com/merlos", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com/company/merlos", icon: Linkedin, label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-3xl text-primary tracking-wide">MERLOS</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transformamos desafios em oportunidades de crescimento. Consultoria empresarial
              especializada para impulsionar seu negócio.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-display text-lg text-foreground mb-4 tracking-wide">SERVIÇOS</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-display text-lg text-foreground mb-4 tracking-wide">EMPRESA</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-lg text-foreground mb-4 tracking-wide">CONTATO</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                <a href="mailto:contato@merlos.com.br" className="hover:text-foreground transition-colors">
                  contato@merlos.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                <a href="tel:+5511999999999" className="hover:text-foreground transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Merlos Consultoria Empresarial. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
