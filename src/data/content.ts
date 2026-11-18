import type { IconName } from './icons'

// Todo o texto das seções, na ordem em que aparecem na página.
// Os textos marcados "site antigo" vieram de b2marketingindustrial.com.br.

// 1. Hero
export const hero = {
  eyebrow: 'Marketing digital B2B industrial',
  // site antigo
  lead: 'Gere novas oportunidades de negócio com leads qualificados, aumente o número de reuniões e visitas comerciais com um processo de vendas e marketing estruturado e posicione sua empresa como referência técnica no digital.',
  specialties: ['Google e Meta Ads', 'Social Selling', 'RD Station CRM', 'Landing pages', 'Conteúdo técnico'],
}

// 2. O que é marketing industrial + pilares
export const definition = {
  title: 'O que é marketing industrial?',
  paragraphs: [
    'É o marketing feito para quem vende produtos e serviços técnicos para outras empresas: máquinas, equipamentos, componentes, insumos e serviços industriais. A compra passa por engenharia, manutenção, suprimentos e diretoria, leva semanas ou meses e depende de especificação técnica.',
    'Por isso, o marketing industrial não mede sucesso em curtidas. Ele existe para gerar leads qualificados, abrir reuniões e visitas comerciais e posicionar a empresa como referência técnica no digital.',
  ],
  pillars: [
    {
      title: 'Atrair',
      text: 'Campanhas e conteúdo técnico que chegam às personas certas do mercado industrial.',
    },
    {
      title: 'Converter',
      text: 'Landing pages e abordagem consultiva que transformam interesse em reuniões comerciais.',
    },
    {
      title: 'Vender',
      text: 'CRM integrado para o comercial acompanhar cada oportunidade até o fechamento.',
    },
  ],
}

// 3. Por que falha com agências genéricas (site antigo)
export const problems = {
  eyebrow: 'Diagnóstico do mercado industrial',
  title: 'Por que o marketing da indústria falha com agências genéricas?',
  items: [
    {
      title: 'Estratégia genérica',
      text: 'Não entende produto técnico, aplicação, ciclo de compra e argumentos de especificação.',
    },
    {
      title: 'Persona errada',
      text: 'Fala com quem interage, mas não influencia a compra, como engenharia, manutenção ou diretoria.',
    },
    {
      title: 'Lead desqualificado',
      text: 'Enche o comercial de contatos sem contexto, urgência ou aderência ao mercado atendido.',
    },
    {
      title: 'Falta de processo',
      text: 'Não existe funil claro, CRM bem usado, rotina de análise e governança comercial.',
    },
    {
      title: 'Tráfego sem engenharia',
      text: 'Keywords, anúncios e landing pages não conversam com o ciclo de decisão industrial.',
    },
  ],
  label: 'Especialista vs genérico',
  closing: 'A B2 faz cada ação fluir com eficiência, garantindo que o foco esteja sempre no resultado.',
  specialist: [
    'Produto técnico entendido',
    'Persona que decide a compra',
    'Lead com contexto no CRM',
    'Rotina de análise semanal',
  ],
}

// 4. Segmentos (site antigo)
export const segments = {
  title: 'Marketing digital funciona para indústrias?',
  lead: 'Funciona quando fala a língua de quem compra. O comprador industrial pesquisa no Google, compara fornecedores no LinkedIn e chega à primeira reunião sabendo o que quer. A B2 atende indústrias e distribuidores de todos os setores industriais.',
  groups: [
    {
      title: 'Equipamentos e serviços',
      items: [
        'Compressores',
        'Pneumática',
        'Hidráulica',
        'Automação',
        'Bombas',
        'Filtração',
        'Codificação e marcação industrial',
        'Rastreabilidade',
        'Impressoras industriais',
        'Máquinas de embalagem',
        'Manutenção',
        'NR-13',
        'Locação de equipamentos',
        'Terceirização de frotas B2B',
      ],
    },
    {
      title: 'Setores',
      items: [
        'Alimentos e bebidas',
        'Farmacêutica',
        'Cosméticos',
        'Pet food',
        'Automotiva',
        'Papel e celulose',
        'Plásticos',
        'Óleo e gás',
        'Mineração',
        'Saneamento',
        'Metalurgia e siderurgia',
      ],
    },
  ],
}

// 5. Serviços (site antigo, carrossel "Como fazemos")
export const services: {
  icon: IconName
  title: string
  text: string
  scope: string
  goal: string
}[] = [
  {
    icon: 'search',
    title: 'Google e Meta Ads (Industrial)',
    text: 'Mídia paga com leitura técnica de demanda, intenção de busca e etapa de compra.',
    scope: 'Keywords técnicas, campanhas por aplicação, públicos industriais e otimização contínua.',
    goal: 'Atrair leads qualificados para o time comercial.',
  },
  {
    icon: 'handshake',
    title: 'Social Selling (LinkedIn)',
    text: 'Prospecção consultiva orientada por mercado, aplicação técnica e perfil de decisão.',
    scope: 'Mapeamento de contas, decisores, roteiro de abordagem e cadência comercial.',
    goal: 'Abrir conversas qualificadas e reuniões técnicas.',
  },
  {
    icon: 'layout',
    title: 'Web, landing pages e tracking',
    text: 'Sites, landing pages e ferramentas de tracking conectados para apresentar soluções e acompanhar a jornada dos leads.',
    scope: 'LPs técnicas, integrações, eventos de conversão, tracking e BI.',
    goal: 'Mensurar e escalar o que funciona.',
  },
  {
    icon: 'workflow',
    title: 'RD Station CRM + Marketing',
    text: 'Estruturação do funil para organizar dados, automações e rotina comercial.',
    scope: 'Implantação, treinamento, segmentação, nutrição e suporte operacional.',
    goal: 'Transformar lead em oportunidade com contexto.',
  },
  {
    icon: 'file',
    title: 'Posts para redes sociais',
    text: 'Conteúdo técnico para traduzir aplicações, diferenciais e provas de valor industrial.',
    scope: 'Linha editorial, pautas por solução, posts institucionais e materiais de autoridade.',
    goal: 'Construir autoridade e posicionamento digital.',
  },
  {
    icon: 'video',
    title: 'Design e vídeo',
    text: 'Comunicação visual orientada à clareza técnica, percepção de valor e consistência de marca.',
    scope: 'Criativos premium, carrosséis, vídeos, identidade e materiais comerciais.',
    goal: 'Dar impacto e precisão à mensagem.',
  },
  {
    icon: 'chart',
    title: 'BI e relatórios',
    text: 'Leitura executiva dos indicadores para acompanhar evolução, gargalos e retorno comercial.',
    scope: 'Painéis, relatórios, análise de origem, conversão e acompanhamento recorrente.',
    goal: 'Decidir com transparência e dados confiáveis.',
  },
  {
    icon: 'bag',
    title: 'Marketplaces',
    text: 'Gestão de anúncios no Mercado Livre e na Shopee para peças, componentes e equipamentos.',
    scope: 'Títulos otimizados para a busca, ads dentro do marketplace, preço e margem.',
    goal: 'Vender também onde o comprador já procura peças.',
  },
]

// 6. Método B2 (site antigo)
export const method = {
  eyebrow: 'Estratégia diferenciada',
  title: 'Método B2 para o ciclo de vendas industrial e vendas complexas',
  lead: 'Um processo estratégico em 6 etapas para fortalecer o posicionamento da sua marca, estruturar a geração de demanda e transformar marketing e vendas em um ecossistema integrado de crescimento comercial.',
  steps: [
    {
      title: 'Diagnóstico e ICP',
      subtitle: 'Persona, segmentos e ofertas',
      text: 'Mapeamento do cliente ideal, segmentos prioritários, dores da persona e portfólio de soluções com maior potencial comercial.',
    },
    {
      title: 'Mapeamento de mercado',
      subtitle: 'Dados de mercado, segmentação e contas-alvo',
      text: 'Levantamento e priorização de empresas com base em mercado, porte, segmento, região, potencial de compra e aderência às soluções.',
    },
    {
      title: 'Arquitetura de funil com CRM',
      subtitle: 'CRM, MQL, SQL e automações',
      text: 'Estruturação do funil comercial com critérios de qualificação, lead scoring, fluxos de nutrição e hand-off entre marketing e vendas.',
    },
    {
      title: 'Aquisição de demanda',
      subtitle: 'Ads, LinkedIn e conteúdo técnico',
      text: 'Ativação de canais pagos e orgânicos para atrair decisores industriais, gerar tráfego qualificado e abrir novas oportunidades comerciais.',
    },
    {
      title: 'Rastreabilidade total das ações',
      subtitle: 'Sistema de tracking estruturado',
      text: 'Registro de todas as ações para medir resultados, entender a origem dos leads e transformar dados em otimizações contínuas.',
    },
    {
      title: 'Governança e evidência',
      subtitle: 'Rotina semanal e reunião mensal',
      text: 'Gestão contínua com relatórios de performance, evidências de execução, alinhamento estratégico e reuniões mensais de resultado.',
    },
  ],
  // Prazos do FAQ do site antigo.
  timeline: [
    {
      when: 'Primeira reunião',
      title: 'Alinhamento estratégico',
      text: 'Produtos, personas, segmentos prioritários e metas comerciais.',
    },
    {
      when: 'Em até 20 dias',
      title: 'Tudo pronto para o lançamento',
      text: 'Campanhas, landing pages, CRM e tracking configurados para entrar no ar.',
    },
    {
      when: 'Daí em diante · recorrente',
      title: 'Rotina semanal e reunião mensal',
      text: 'Otimização contínua, relatórios de performance e reunião mensal de resultados.',
    },
  ],
}

// 7. Industrial × B2C
export const comparison = {
  title: 'Quais são as diferenças entre marketing industrial e B2C?',
  lead: 'No varejo, uma pessoa decide em minutos. Na indústria, um grupo decide em meses, com dinheiro, prazo e operação em jogo.',
  columns: ['Marketing industrial', 'Marketing B2C'],
  rows: [
    {
      label: 'Quem compra',
      industrial: 'Equipes técnicas e de suprimentos, em nome de uma empresa',
      b2c: 'Uma pessoa, para uso próprio',
    },
    {
      label: 'Quantos decidem',
      industrial: 'Engenharia, manutenção, compras e diretoria',
      b2c: 'Normalmente uma pessoa',
    },
    {
      label: 'Ciclo de compra',
      industrial: 'Semanas ou meses, com cotação e especificação',
      b2c: 'Minutos ou poucos dias',
    },
    {
      label: 'O que convence',
      industrial: 'Aplicação, dados técnicos, desempenho comprovado e suporte',
      b2c: 'Preço, marca, emoção e conveniência',
    },
    {
      label: 'Objetivo do marketing',
      industrial: 'Leads qualificados, reuniões e oportunidades no CRM',
      b2c: 'Venda direta e volume',
    },
  ],
}

// 8. Industrial × B2B generalista
export const difference = {
  title: 'Marketing industrial é diferente de marketing B2B?',
  lead: 'Todo marketing industrial é B2B, mas nem todo marketing B2B entende de indústria.',
  cards: [
    {
      title: 'Agência de marketing industrial',
      text: 'Conhece produto técnico, aplicação, ciclo de compra e argumentos de especificação. Fala com engenharia, manutenção, suprimentos e diretoria, cada um com a mensagem certa.',
      highlight: true,
    },
    {
      title: 'Agência de marketing B2B generalista',
      text: 'Atende software, serviços e indústria com o mesmo método. Gera volume de contatos, mas tende a falar com a persona errada e a entregar leads sem contexto ao comercial.',
      highlight: false,
    },
  ],
}

// 9. Propósito e clientes
export const purpose = {
  title: 'O motor que transforma marketing em negócios',
  text: 'Nosso trabalho é transformar a capacidade técnica de indústrias e distribuidores em oportunidades comerciais: leads qualificados, reuniões e vendas acompanhadas no CRM.',
  clientsTitle: 'Empresas que confiam na B2',
}

// 10. Contato
export const contact = {
  eyebrow: 'Time técnico',
  // site antigo
  title: 'Sua empresa terá uma equipe completa de marketing digital especializada no mercado industrial',
  benefits: [
    'Diagnóstico do seu mercado, das personas e das ofertas',
    'Ações prontas para o lançamento em até 20 dias',
    'Rotina semanal e reunião mensal de resultados',
  ],
  profiles: ['Indústria', 'Distribuidor', 'Outros'],
}

// 11. FAQ (as cinco primeiras vêm do site antigo)
export const faq: { q: string; a: string }[] = [
  {
    q: 'Vocês atendem qualquer segmento industrial?',
    a: 'Sim. Atuamos com indústrias de diversos segmentos como metalurgia, automação, equipamentos, química, plásticos, alimentos e embalagens. Nosso método é adaptável à realidade de cada negócio, independentemente do nicho industrial.',
  },
  {
    q: 'O que está incluso nos serviços?',
    a: 'Campanhas online: Google Ads, Meta Ads (Instagram), prospecção no LinkedIn e estudo de mercado para entender oportunidades e concorrência. Ferramentas de gestão: RD Station CRM e Marketing para organizar leads e campanhas. Conteúdos para redes sociais: 8 conteúdos por mês, incluindo posts, carrosséis, vídeos, artigos técnicos, enquetes e e-mail marketing semanal. Gestão do site: atualizações, otimização de velocidade, ajustes pontuais de imagens e textos, além de relatórios de performance das campanhas.',
  },
  {
    q: 'Qual o prazo de implantação?',
    a: 'Após nossa primeira reunião de alinhamento estratégico, em apenas 20 dias todas as ações estarão prontas para o lançamento das campanhas.',
  },
  {
    q: 'O projeto inclui a implantação do CRM, a configuração do funil e o treinamento da equipe?',
    a: 'Sim. Fazemos a implantação completa do RD Station CRM + Marketing, incluindo configuração de funil, automações, lead scoring, integração com formulários e treinamento da equipe. Também atuamos em migrações e reestruturações de funil existente.',
  },
  {
    q: 'Como funciona o Social Selling?',
    a: 'Estruturamos uma estratégia de prospecção consultiva no LinkedIn baseada em: mapeamento de contas-alvo e decisores, roteiro de abordagem por segmento, cadência de contatos com conteúdo de valor e ativação dos vendedores como autoridade técnica no mercado.',
  },
  {
    q: 'Quanto custa?',
    a: 'Depende dos canais, do número de campanhas e da verba de mídia. Depois do diagnóstico, enviamos uma proposta com o escopo e o investimento recomendados para a sua empresa.',
  },
]

// 12. Faixa final (site antigo)
export const finalCta = 'Pronto para estruturar sua demanda B2B com um método comprovado?'
