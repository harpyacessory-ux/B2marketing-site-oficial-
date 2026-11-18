# Site oficial — B2 Marketing Industrial

Site institucional da B2 Marketing Industrial: uma página única com hero, desafio, serviços, método, público, dúvidas frequentes e contato.

Feito em [Astro](https://astro.build) com Tailwind CSS, o mesmo stack das landing pages da B2. O resultado é um site estático, sem servidor.

## Rodar no computador

```bash
npm install
npm run dev       # http://localhost:4321
```

Antes de publicar:

```bash
npm run check     # verificação de tipos
npm run build     # gera o site em dist/
npm run preview   # serve o dist/ para conferir
```

## Onde mudar cada coisa

| O que | Arquivo |
| --- | --- |
| Telefone, WhatsApp, e-mail, redes sociais, título e descrição para o Google | `src/data/site.ts` |
| Todos os textos das seções (serviços, método, dúvidas etc.) | `src/data/content.ts` |
| Cores e fonte da marca | `src/styles/global.css` (bloco `@theme`) |
| Ordem das seções | `src/pages/index.astro` |
| Logo e favicon | `public/logo-b2.png` e `public/favicon.png` |

## Formulário de contato

O formulário não envia e-mail nem guarda dados: ao clicar em "Enviar pelo WhatsApp", ele monta uma mensagem com os campos preenchidos e abre uma conversa no WhatsApp da B2. Por isso o site não precisa de servidor.

Todo botão de contato tem um atributo `data-cta` (ex.: `hero-whatsapp`, `form-whatsapp`) para rastrear cliques no Google Tag Manager. O envio do formulário também faz `dataLayer.push({ event: 'lead_whatsapp' })` quando o GTM está instalado.

## Publicar na Vercel

1. Em [vercel.com/new](https://vercel.com/new), importe este repositório.
2. A Vercel detecta Astro sozinha. Não é preciso mudar nada.
3. Cada push em `main` publica uma nova versão.
4. Para usar o domínio `b2marketingindustrial.com.br`, adicione-o em **Settings → Domains** e siga as instruções de DNS.
