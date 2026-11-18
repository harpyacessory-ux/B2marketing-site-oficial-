// Dados da empresa usados no site inteiro (cabeçalho, contato, rodapé e SEO).
export const site = {
  name: 'B2 Marketing Industrial',
  url: 'https://b2marketingindustrial.com.br',
  title: 'Agência de Marketing Industrial e B2B | B2 Marketing Industrial',
  description:
    'Agência de marketing industrial e B2B. Google Ads, LinkedIn, landing pages, marketplaces e conteúdo técnico para indústrias, distribuidores e empresas que vendem para outras empresas.',
  whatsapp: { display: '(12) 99622-2287', number: '5512996222287' },
  phone: { display: '(13) 3469-7115', tel: '+551334697115' },
  email: 'marketplace@b2marketingindustrial.com.br',
  instagram: 'https://www.instagram.com/b2marketingindustrial/',
  linkedin: 'https://www.linkedin.com/company/b2marketingindustrial/',
}

export const whatsappMessage =
  'Olá! Vim pelo site da B2 e quero falar com um especialista em marketing industrial.'

export function whatsappLink(text = whatsappMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`
}

export const nav = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como trabalhamos', href: '#metodo' },
  { label: 'Para quem', href: '#para-quem' },
  { label: 'Dúvidas', href: '#duvidas' },
]
