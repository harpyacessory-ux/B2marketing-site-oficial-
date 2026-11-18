// Dados da empresa usados no site inteiro (cabeçalho, contato, rodapé e SEO).
export const site = {
  name: 'B2 Marketing Industrial',
  legalName: 'B2 Growth Marketing Ltda',
  cnpj: '45.855.633/0001-10',
  tagline: 'O motor que transforma marketing em negócios',
  url: 'https://www.b2marketingindustrial.com.br',
  title: 'Agência de Marketing Industrial B2B | B2 Marketing Industrial',
  description:
    'Agência de marketing digital especializada no mercado industrial. Estratégia, tecnologia e dados para gerar leads qualificados, reuniões e oportunidades B2B.',
  whatsapp: { display: '(11) 91096-3153', number: '5511910963153' },
  phone: { display: '(13) 3469-7115', tel: '+551334697115' },
  email: 'contato@b2marketingindustrial.com.br',
  address: {
    street: 'Rua Benjamin Constant, 61 - Ed. Helbor',
    city: 'São Vicente',
    state: 'SP',
  },
  instagram: 'https://www.instagram.com/b2marketingindustrial/',
  linkedin: 'https://www.linkedin.com/company/b2-marketing-industrial/',
  // Mesmo contêiner do site antigo, para não perder o histórico de conversões.
  gtm: 'GTM-K4P542CR',
}

export const whatsappMessage =
  'Olá! Vim pelo site da B2 e quero falar com um especialista em marketing industrial.'

export function whatsappLink(text = whatsappMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`
}

// As âncoras repetem as do site antigo (#servicos, #metodo-b2, #faq, #contato),
// então links de anúncios e e-mails já publicados continuam funcionando.
export const nav = [
  { label: 'Soluções', href: '#servicos' },
  { label: 'Método B2', href: '#metodo-b2' },
  { label: 'Segmentos', href: '#segmentos' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'FAQ', href: '#faq' },
]
