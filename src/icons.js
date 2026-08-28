// Ícones — linha minimalista, desenhados para o sistema visual da Kairós.
// Todos autorais (não importados de bibliotecas de terceiros).

const attrs =
  'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"';

export const icons = {
  whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.51 3.62 1.4 5.12L2 22l5.12-1.5a9.83 9.83 0 0 0 4.92 1.31h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.04.89.9-2.96-.2-.31a8.16 8.16 0 0 1-1.28-4.42c0-4.51 3.68-8.19 8.2-8.19 2.19 0 4.24.85 5.79 2.4a8.11 8.11 0 0 1 2.4 5.8c0 4.5-3.68 8.19-8.19 8.19h.01Zm4.48-6.13c-.24-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.97-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.35-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14 0-.31-.02-.47-.02-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"/></svg>`,

  search: `<svg xmlns="http://www.w3.org/2000/svg" ${attrs}><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.7-4.7"/></svg>`,

  compare: `<svg xmlns="http://www.w3.org/2000/svg" ${attrs}><path d="M6 4v13a2 2 0 0 0 2 2h4"/><path d="M3 7h6"/><path d="M18 4v13a2 2 0 0 1-2 2h-4"/><path d="M15 20h6"/></svg>`,

  instagram: `<svg xmlns="http://www.w3.org/2000/svg" ${attrs}><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"/></svg>`,

  chat: `<svg xmlns="http://www.w3.org/2000/svg" ${attrs}><path d="M4 5.5h16v10.5H9.2L5 20v-4H4V5.5Z"/><path d="M8 9.5h8M8 12.5h5"/></svg>`,

  calendar: `<svg xmlns="http://www.w3.org/2000/svg" ${attrs}><rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M8 3v3.5M16 3v3.5"/></svg>`,

  chart: `<svg xmlns="http://www.w3.org/2000/svg" ${attrs}><path d="M4 20V10M10 20V4M16 20v-7M4 20h16"/></svg>`,

  gear: `<svg xmlns="http://www.w3.org/2000/svg" ${attrs}><circle cx="12" cy="12" r="3"/><path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.1 5.9l-1.55 1.55M7.45 16.55 5.9 18.1M18.1 18.1l-1.55-1.55M7.45 7.45 5.9 5.9"/></svg>`,

  sparkle: `<svg xmlns="http://www.w3.org/2000/svg" ${attrs}><path d="M12 3.5c.6 3 2 4.4 5 5-3 .6-4.4 2-5 5-.6-3-2-4.4-5-5 3-.6 4.4-2 5-5Z"/><path d="M18.5 15.5c.3 1.4 1 2.1 2.4 2.4-1.4.3-2.1 1-2.4 2.4-.3-1.4-1-2.1-2.4-2.4 1.4-.3 2.1-1 2.4-2.4Z"/></svg>`,

  users: `<svg xmlns="http://www.w3.org/2000/svg" ${attrs}><circle cx="9" cy="8.5" r="3"/><path d="M2.7 19.5c.9-3 3.2-4.7 6.3-4.7s5.4 1.7 6.3 4.7"/><path d="M15.5 6.2a3 3 0 0 1 0 5.9M18.3 19.5c-.5-1.9-1.5-3.3-3-4.1"/></svg>`,

  check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4.5 12.5l5 5 10-11"/></svg>`,

  layers: `<svg xmlns="http://www.w3.org/2000/svg" ${attrs}><path d="M12 3.5 3.5 8 12 12.5 20.5 8 12 3.5Z"/><path d="M3.5 12l8.5 4.5L20.5 12M3.5 16l8.5 4.5L20.5 16"/></svg>`,

  target: `<svg xmlns="http://www.w3.org/2000/svg" ${attrs}><circle cx="12" cy="12" r="8.2"/><circle cx="12" cy="12" r="4.3"/><circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none"/></svg>`,

  building: `<svg xmlns="http://www.w3.org/2000/svg" ${attrs}><rect x="4.5" y="3.5" width="9" height="17"/><rect x="15" y="9" width="4.5" height="11.5"/><path d="M7.5 7h1M10.5 7h1M7.5 10.5h1M10.5 10.5h1M7.5 14h1M10.5 14h1"/></svg>`,

  globe: `<svg xmlns="http://www.w3.org/2000/svg" ${attrs}><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5S9.6 5.8 12 3.5Z"/></svg>`,
};

export function icon(name) {
  const svg = icons[name] || '';
  return svg;
}
