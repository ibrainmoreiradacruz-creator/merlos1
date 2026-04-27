export interface Service {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  icon: string
  benefits: string[]
  features: string[]
}

export const services: Service[] = [
  {
    slug: "excelencia-em-vendas",
    title: "Excelência em Vendas",
    shortDescription:
      "Treinamento e estratégias para transformar sua equipe comercial em uma máquina de resultados.",
    longDescription:
      "Desenvolvemos programas personalizados de capacitação comercial que elevam o desempenho da sua equipe de vendas. Combinamos técnicas comprovadas de negociação, gestão de pipeline e relacionamento com clientes para criar uma cultura de alta performance que gera resultados consistentes.",
    icon: "trophy",
    benefits: [
      "Aumento médio de 40% nas taxas de conversão",
      "Redução do ciclo de vendas",
      "Melhoria na qualificação de leads",
      "Equipe mais motivada e engajada",
    ],
    features: [
      "Diagnóstico completo do processo comercial",
      "Treinamento personalizado para a equipe",
      "Implementação de CRM e ferramentas",
      "Acompanhamento mensal de KPIs",
      "Scripts e playbooks de vendas",
    ],
  },
  {
    slug: "marketing-digital",
    title: "Marketing Digital",
    shortDescription:
      "Estratégias digitais completas para aumentar sua presença online e gerar leads qualificados.",
    longDescription:
      "Criamos e executamos estratégias de marketing digital 360° que conectam sua marca ao público certo. Do tráfego pago ao orgânico, das redes sociais ao e-mail marketing, construímos uma presença digital sólida que gera autoridade e converte visitantes em clientes.",
    icon: "target",
    benefits: [
      "ROI mensurável em todas as ações",
      "Aumento da visibilidade da marca",
      "Geração consistente de leads",
      "Posicionamento como autoridade no mercado",
    ],
    features: [
      "Gestão de tráfego pago (Google, Meta, LinkedIn)",
      "SEO e marketing de conteúdo",
      "Automação de marketing",
      "Gestão de redes sociais",
      "Análise e relatórios de performance",
    ],
  },
  {
    slug: "desenvolvimento-de-sites",
    title: "Desenvolvimento de Sites",
    shortDescription:
      "Sites modernos, responsivos e otimizados que convertem visitantes em clientes.",
    longDescription:
      "Desenvolvemos sites e aplicações web de alta performance que representam sua marca com excelência. Utilizamos as tecnologias mais modernas para criar experiências digitais rápidas, seguras e otimizadas para conversão, sempre com foco na experiência do usuário.",
    icon: "code",
    benefits: [
      "Sites rápidos e otimizados para SEO",
      "Design responsivo para todos os dispositivos",
      "Alta taxa de conversão",
      "Fácil gestão de conteúdo",
    ],
    features: [
      "Design UI/UX personalizado",
      "Desenvolvimento frontend e backend",
      "Integração com sistemas existentes",
      "Otimização de performance",
      "Suporte e manutenção contínua",
    ],
  },
  {
    slug: "consultoria-estrategica",
    title: "Consultoria Estratégica",
    shortDescription:
      "Planejamento e direcionamento estratégico para crescimento sustentável do seu negócio.",
    longDescription:
      "Oferecemos uma visão externa e especializada para ajudar sua empresa a definir e alcançar objetivos ambiciosos. Através de análises profundas do mercado, concorrência e operações internas, criamos planos de ação claros e executáveis que impulsionam o crescimento.",
    icon: "compass",
    benefits: [
      "Clareza na direção do negócio",
      "Decisões baseadas em dados",
      "Identificação de oportunidades de mercado",
      "Alinhamento organizacional",
    ],
    features: [
      "Análise SWOT e diagnóstico empresarial",
      "Definição de OKRs e metas",
      "Planejamento estratégico anual",
      "Análise de mercado e concorrência",
      "Workshops de alinhamento estratégico",
    ],
  },
  {
    slug: "rebranding-de-marca",
    title: "Rebranding de Marca",
    shortDescription:
      "Renovação completa da identidade visual e posicionamento da sua marca no mercado.",
    longDescription:
      "Transformamos a percepção da sua marca através de um processo criativo estratégico. Do naming à identidade visual completa, criamos marcas memoráveis que comunicam seus valores e se conectam emocionalmente com seu público-alvo.",
    icon: "sparkles",
    benefits: [
      "Diferenciação no mercado",
      "Conexão emocional com o público",
      "Consistência em todos os pontos de contato",
      "Aumento do valor percebido",
    ],
    features: [
      "Pesquisa e estratégia de marca",
      "Naming e tagline",
      "Design de logotipo e identidade visual",
      "Manual de marca completo",
      "Aplicações em materiais diversos",
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}
