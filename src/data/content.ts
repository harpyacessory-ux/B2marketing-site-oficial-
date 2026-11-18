import type { IconName } from './icons'

// Todo o texto das seções. Para mudar o conteúdo do site, edite aqui.

export const channels = ['Google Ads', 'LinkedIn Ads', 'Meta Ads', 'Mercado Livre', 'Shopee']

export const heroPoints = [
  'Especialistas no mercado industrial',
  'Marketing integrado a vendas',
  'Correção de rota semanal',
]

// Card do hero: a jornada de um lead, da busca ao comercial.
export const journey: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'search',
    title: 'Busca no Google',
    text: '“compressor de parafuso 50 hp preço”',
  },
  {
    icon: 'layout',
    title: 'Landing page da linha',
    text: 'Ficha técnica, aplicações e botão de cotação',
  },
  {
    icon: 'message',
    title: 'Cotação pelo WhatsApp',
    text: 'Contato rastreado até a origem do clique',
  },
  {
    icon: 'users',
    title: 'Oportunidade no comercial',
    text: 'Seu time recebe o lead com contexto',
  },
]

export const challenges: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'users',
    title: 'Mais de uma pessoa decide',
    text: 'Comprador, engenheiro, gestor e diretoria participam da compra. Cada um procura uma resposta diferente, e a comunicação precisa chegar a todos.',
  },
  {
    icon: 'clock',
    title: 'O ciclo de venda é longo',
    text: 'Entre a primeira busca e o pedido existem cotações, especificações e aprovações. O marketing precisa acompanhar a jornada, não só gerar um clique.',
  },
  {
    icon: 'filter',
    title: 'Clique errado custa caro',
    text: 'Buscas de curso, emprego e consumidor final consomem verba sem gerar negócio. Bloqueamos esse tráfego antes que ele vire gasto.',
  },
]

export const services: { icon: IconName; title: string; text: string; items: string[] }[] = [
  {
    icon: 'search',
    title: 'Google Ads para indústria',
    text: 'Campanhas de pesquisa organizadas por intenção de compra, com palavras-chave técnicas e negativas que filtram curiosos.',
    items: ['Estrutura por linha de produto', 'Negativação de buscas B2C', 'Conversões rastreadas'],
  },
  {
    icon: 'target',
    title: 'LinkedIn Ads e prospecção',
    text: 'Alcance decisores por cargo, setor e porte de empresa, e gere visitas qualificadas para o time comercial.',
    items: ['Segmentação por cargo e setor', 'Mensagem para cada papel do comitê', 'Apoio à prospecção ativa'],
  },
  {
    icon: 'layout',
    title: 'Landing pages B2B',
    text: 'Páginas de cotação por produto ou serviço, rápidas no celular e com WhatsApp e formulário rastreados.',
    items: ['Uma página por campanha', 'Ficha técnica e aplicações', 'Carregamento rápido'],
  },
  {
    icon: 'bag',
    title: 'Marketplaces industriais',
    text: 'Gestão de anúncios no Mercado Livre e na Shopee para peças, componentes e equipamentos.',
    items: ['Títulos otimizados para a busca', 'Ads dentro do marketplace', 'Preço, margem e investimento sob controle'],
  },
  {
    icon: 'file',
    title: 'Conteúdo técnico',
    text: 'Materiais que respondem às dúvidas de engenheiros e compradores e sustentam a decisão de compra.',
    items: ['Aplicações e casos de uso', 'Catálogos e fichas técnicas', 'Publicações para o LinkedIn'],
  },
  {
    icon: 'workflow',
    title: 'Automação e integração com vendas',
    text: 'Cada contato chega ao comercial com origem, campanha e contexto, para nenhuma oportunidade se perder.',
    items: ['Origem de cada lead rastreada', 'Integração com o CRM', 'Rotina de nutrição de contatos'],
  },
]

export const steps: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'compass',
    title: 'Diagnóstico',
    text: 'Entendemos produtos, margens, cliente ideal, comitê de compra e o que o seu comercial considera uma boa oportunidade.',
  },
  {
    icon: 'layers',
    title: 'Estrutura',
    text: 'Definimos canais, campanhas por intenção, palavras-chave, negativas e as landing pages de cada linha.',
  },
  {
    icon: 'zap',
    title: 'Ativação',
    text: 'Colocamos as campanhas no ar com conversões rastreadas, do clique ao contato no WhatsApp ou no formulário.',
  },
  {
    icon: 'refresh',
    title: 'Correção de rota',
    text: 'Toda semana revisamos investimento, termos de busca e resultados, e ajustamos o que não está entregando.',
  },
]

export const audiences: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'factory',
    title: 'Fabricantes e indústrias',
    text: 'Máquinas, equipamentos, insumos e componentes vendidos por cotação.',
  },
  {
    icon: 'truck',
    title: 'Distribuidores e revendas',
    text: 'Distribuidores e representantes que precisam de demanda por linha e por marca.',
  },
  {
    icon: 'wrench',
    title: 'Serviços técnicos',
    text: 'Manutenção, locação de equipamentos, assistência técnica e engenharia.',
  },
  {
    icon: 'package',
    title: 'Peças e reposição',
    text: 'Peças e acessórios vendidos pelo site, pelo WhatsApp e nos marketplaces.',
  },
]

export const faq: { q: string; a: string }[] = [
  {
    q: 'A B2 atende apenas indústrias?',
    a: 'Atendemos indústrias, distribuidores, representantes e prestadores de serviços técnicos: empresas que vendem para outras empresas. O foco é a venda B2B, em que a compra passa por cotação, especificação técnica ou aprovação.',
  },
  {
    q: 'Preciso ter um site pronto para começar?',
    a: 'Não. Criamos landing pages para cada campanha ou linha de produto, o que costuma gerar mais contatos do que mandar o anúncio para a página inicial do site.',
  },
  {
    q: 'Em quanto tempo aparecem os primeiros contatos?',
    a: 'Campanhas de pesquisa começam a receber visitas assim que entram no ar. As primeiras semanas servem para calibrar palavras-chave, negativas e lances, e por isso a correção de rota semanal começa desde o primeiro dia.',
  },
  {
    q: 'Vocês trabalham com Mercado Livre e Shopee?',
    a: 'Sim. Gerenciamos títulos, anúncios e campanhas de ads para empresas que vendem peças, componentes e equipamentos nos marketplaces.',
  },
  {
    q: 'Vocês atendem empresas de outras cidades e estados?',
    a: 'Sim. O trabalho é feito a distância, com reuniões online e acompanhamento semanal, para empresas de todo o Brasil.',
  },
  {
    q: 'Quanto custa?',
    a: 'Depende dos canais, do número de campanhas e da verba de mídia. Depois do diagnóstico, enviamos uma proposta com o escopo e o investimento recomendados.',
  },
]

export const interests = [
  'Google Ads',
  'LinkedIn Ads e prospecção',
  'Landing pages',
  'Marketplaces',
  'Conteúdo técnico',
  'Ainda não sei',
]
