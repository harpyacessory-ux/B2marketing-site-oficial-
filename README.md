# Site oficial — B2 Marketing Industrial

Site institucional da B2 Marketing Industrial: uma página longa, no formato de "página pilar" de marketing industrial, com o conteúdo do site antigo reorganizado.

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

## Seções, na ordem

1. Hero (foto de fundo, especialidades)
2. O que é marketing industrial + pilares Atrair / Converter / Vender
3. Por que o marketing da indústria falha com agências genéricas
4. Segmentos atendidos
5. Serviços (escopo e objetivo de cada um)
6. Método B2 em 6 etapas + como é um projeto na prática
7. Comparativo marketing industrial × B2C
8. Marketing industrial × B2B generalista
9. Propósito + logos de clientes
10. Contato com formulário
11. FAQ
12. Faixa final de CTA

## Onde mudar cada coisa

| O que | Arquivo |
| --- | --- |
| Telefone, WhatsApp, e-mail, endereço, CNPJ, redes, GTM, título e descrição para o Google | `src/data/site.ts` |
| Todos os textos das seções | `src/data/content.ts` |
| Logos de clientes | `src/data/clients.ts` e `src/assets/clientes/` |
| Fotos | `src/assets/` |
| Cores e fonte da marca | `src/styles/global.css` (bloco `@theme`) |
| Ordem das seções | `src/pages/index.astro` |

As imagens em `src/assets/` são convertidas para WebP e redimensionadas no build.

## Formulário e rastreamento

- O Google Tag Manager (`GTM-K4P542CR`, o mesmo do site antigo) só entra no build de produção.
- O formulário não grava dados: ao enviar, ele dispara no `dataLayer` o evento `Elementor Form Success` (o mesmo nome do site antigo, que é o gatilho de conversão no GTM) e abre o WhatsApp da B2 com os dados preenchidos e a origem do clique (UTMs e gclid).
- Todo botão de contato tem um atributo `data-cta` para rastrear cliques no GTM.

## Publicar

O domínio usado como canônico é `https://www.b2marketingindustrial.com.br`, o mesmo do site antigo.

Na Vercel: importe o repositório em [vercel.com/new](https://vercel.com/new) (Astro é detectado sozinho) e adicione o domínio em **Settings → Domains**. Em outro servidor: rode `npm run build` e publique o conteúdo de `dist/`.
