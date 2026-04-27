-- Tabela de avaliações para cada serviço
CREATE TABLE IF NOT EXISTS avaliacoes (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  servico_slug TEXT NOT NULL,        -- ex: 'marketing-digital'
  autor       TEXT NOT NULL,
  texto       TEXT NOT NULL,
  nota        INT CHECK (nota BETWEEN 1 AND 5),
  criado_em   TIMESTAMP DEFAULT NOW()
);

-- Tabela de projetos para cada serviço
CREATE TABLE IF NOT EXISTS projetos (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  servico_slug TEXT NOT NULL,
  titulo       TEXT NOT NULL,
  descricao    TEXT,
  imagem_url   TEXT,
  link_externo TEXT,
  criado_em    TIMESTAMP DEFAULT NOW()
);

-- Criar índices para melhorar performance das queries
CREATE INDEX IF NOT EXISTS idx_avaliacoes_servico_slug ON avaliacoes(servico_slug);
CREATE INDEX IF NOT EXISTS idx_projetos_servico_slug ON projetos(servico_slug);

-- Permitir acesso público de leitura (sem autenticação necessária)
ALTER TABLE avaliacoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE projetos ENABLE ROW LEVEL SECURITY;

-- Política para permitir leitura pública
CREATE POLICY "Permitir leitura pública de avaliacoes" ON avaliacoes
  FOR SELECT USING (true);

CREATE POLICY "Permitir leitura pública de projetos" ON projetos
  FOR SELECT USING (true);

-- Inserir dados de exemplo
INSERT INTO avaliacoes (servico_slug, autor, texto, nota) VALUES
  ('excelencia-em-vendas', 'Maria Silva', 'Excelente consultoria! Aumentamos nossas vendas em 40% após implementar as estratégias recomendadas.', 5),
  ('excelencia-em-vendas', 'João Santos', 'Profissionais muito capacitados. Recomendo fortemente para quem quer escalar vendas.', 5),
  ('excelencia-em-vendas', 'Ana Costa', 'Transformou completamente nossa abordagem comercial. Resultados impressionantes!', 4),
  ('marketing-digital', 'Pedro Almeida', 'Nossa presença online melhorou drasticamente. ROI positivo desde o primeiro mês.', 5),
  ('marketing-digital', 'Carla Ferreira', 'Equipe super competente em tráfego pago e SEO. Recomendo!', 5),
  ('marketing-digital', 'Lucas Oliveira', 'Ótimo trabalho com nossas redes sociais e campanhas.', 4),
  ('desenvolvimento-de-sites', 'Fernanda Lima', 'Site moderno, rápido e responsivo. Exatamente o que precisávamos.', 5),
  ('desenvolvimento-de-sites', 'Ricardo Souza', 'Entregaram antes do prazo e com qualidade superior ao esperado.', 5),
  ('consultoria-estrategica', 'Patricia Gomes', 'Visão estratégica incrível. Nos ajudaram a definir metas claras e alcançáveis.', 5),
  ('consultoria-estrategica', 'Marcos Ribeiro', 'Consultoria que realmente entende o mercado brasileiro.', 4),
  ('rebranding-de-marca', 'Juliana Martins', 'Nossa nova identidade visual superou todas as expectativas!', 5),
  ('rebranding-de-marca', 'Bruno Cardoso', 'Processo criativo muito bem conduzido. Resultado profissional.', 5);

INSERT INTO projetos (servico_slug, titulo, descricao, imagem_url, link_externo) VALUES
  ('excelencia-em-vendas', 'Case Empresa ABC', 'Aumento de 60% nas vendas em 6 meses através de treinamento especializado', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', 'https://example.com'),
  ('excelencia-em-vendas', 'Projeto Vendas Tech', 'Implementação de CRM e processos de vendas consultivas', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', 'https://example.com'),
  ('marketing-digital', 'Campanha Digital XYZ', 'Estratégia 360° de marketing digital com 300% de aumento em leads', 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c4e8?w=800', 'https://example.com'),
  ('marketing-digital', 'E-commerce Fashion', 'Gestão completa de tráfego pago com ROAS de 8x', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', 'https://example.com'),
  ('desenvolvimento-de-sites', 'Portal Corporativo', 'Site institucional moderno com CMS personalizado', 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800', 'https://example.com'),
  ('desenvolvimento-de-sites', 'Plataforma SaaS', 'Desenvolvimento de aplicação web completa', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', 'https://example.com'),
  ('consultoria-estrategica', 'Planejamento Estratégico', 'Definição de OKRs e roadmap para startup', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800', 'https://example.com'),
  ('rebranding-de-marca', 'Nova Marca Startup', 'Rebranding completo incluindo naming e identidade visual', 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800', 'https://example.com');
