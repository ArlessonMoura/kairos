# Kairós — Landing Page

Landing page comercial da Kairós, construída com **HTML5 + CSS3 + JavaScript vanilla + Bootstrap 5 + Vite**.

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
```

## Como gerar o build de produção

```bash
npm run build      # gera a pasta dist/
npm run preview    # serve o build de produção localmente para conferência
```

## Estrutura

```
kairos/
├── index.html          # marcação — hero + 3 sections + CTA final + footer
├── public/
│   └── favicon.svg      # marca "K" com o ponto dourado da Kairós
├── src/
│   ├── main.js           # boot da página: links de WhatsApp, ícones, navbar,
│   │                      # revelação ao rolar, botão flutuante, preferência
│   │                      # de movimento reduzido
│   ├── icons.js           # biblioteca de ícones SVG autorais (sem dependências)
│   └── style.css          # tokens de design + todos os estilos do site
└── dist/                 # build de produção já gerado (pronto para publicar)
```

## Configuração do WhatsApp

O número e as mensagens pré-preenchidas de cada CTA ficam centralizados em
`src/main.js`, na constante `WHATSAPP_NUMBER` e nos atributos `data-wa-msg`
espalhados pelo `index.html`. Para trocar o número ou o texto de qualquer
botão, basta editar esse atributo — o link `wa.me` correto (com o texto
devidamente codificado) é montado automaticamente no carregamento da página.

## Publicando o site

A pasta `dist/` gerada pelo `npm run build` é 100% estática: pode ser
publicada em qualquer serviço de hospedagem estática (Vercel, Netlify,
Cloudflare Pages, GitHub Pages, um servidor próprio, etc.) sem nenhuma
configuração adicional.
