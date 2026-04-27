import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { services, getServiceBySlug } from "@/lib/services-data"
import { createClient } from "@/lib/supabase/server"
import { ServicePageClient } from "./service-page-client"

const heroImages: Record<string, string> = {
  "excelencia-em-vendas": "/excelencia-em-vendas.png",
  "marketing-digital": "/marketing-digital.png",
  "desenvolvimento-de-sites": "/desenvolvimento-de-sites.png",
  "consultoria-estrategica": "/consultoria-estrategica.png",
  "rebranding-de-marca": "/rebranding-de-marca.png",
}

// Títulos formatados
const formattedTitles: Record<string, { small: string; large: string }> = {
  "excelencia-em-vendas": { small: "", large: "Treinamento de Excelência\nem Vendas" },
  "marketing-digital": { small: "", large: "Marketing\nDigital" },
  "desenvolvimento-de-sites": { small: "", large: "Desenvolvimento\nde Sites" },
  "consultoria-estrategica": { small: "", large: "Consultoria\nEstratégica" },
  "rebranding-de-marca": { small: "", large: "Rebranding\nde Marca" },
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Serviço não encontrado | Merlos",
    }
  }

  return {
    title: `${service.title} | Merlos Consultoria Empresarial`,
    description: service.shortDescription,
  }
}

async function getAvaliacoes(slug: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("avaliacoes")
    .select("*")
    .eq("servico_slug", slug)
    .order("criado_em", { ascending: false })
    .limit(10)

  if (error) {
    console.log("[v0] Error fetching avaliacoes:", error)
  }
  return data || []
}

async function getProjetos(slug: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("projetos")
    .select("*")
    .eq("servico_slug", slug)
    .order("criado_em", { ascending: false })
    .limit(10)

  if (error) {
    console.log("[v0] Error fetching projetos:", error)
  }
  return data || []
}

export default async function ServicoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const [avaliacoes, projetos] = await Promise.all([
    getAvaliacoes(slug),
    getProjetos(slug),
  ])

  const heroImage = heroImages[slug] || heroImages["consultoria-estrategica"]
  const title = formattedTitles[slug] || { small: "", large: service.title }
  const otherServices = services.filter(s => s.slug !== slug)

  return (
    <ServicePageClient
      service={service}
      heroImage={heroImage}
      title={title}
      avaliacoes={avaliacoes}
      projetos={projetos}
      otherServices={otherServices}
      slug={slug}
    />
  )
}
