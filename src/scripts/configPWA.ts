import type { ManifestOptions } from "vite-plugin-pwa";

export const manifest: Partial<ManifestOptions> = {
    name: 'Ivan - Portafolio',
    short_name: 'Ivan',
    description:
        "Este es mi portafolio, creado con Astro PWA Starter, una plantilla de Astro para construir sitios web estáticos robustos.",
    background_color: '#090a20',
    theme_color: '#090a20',
    display: 'standalone',
    orientation: 'portrait',
    icons: [
        {
            src: './public/img/icon_1024.png',
            sizes: '1024x1018',
            type: 'image/png'
        },
        {
            src: './public/img/icon_512.png',
            sizes: '512x509',
            type: 'image/png'
        },
        {
            src: './public/img/icon_384.png',
            sizes: '384x382',
            type: 'image/png'
        },
        {
            src: './public/img/icon_256.png',
            sizes: '256x255',
            type: 'image/png'
        },
        {
            src: './public/img/icon_192.png',
            sizes: '192x191',
            type: 'image/png'
        },
        {
            src: './public/img/icon_128.png',
            sizes: '128x128',
            type: 'image/png'
        },
        {
            src: './public/img/icon_96.png',
            sizes: '96x96',
            type: 'image/png'
        },
        {
            src: './public/img/icon_64.png',
            sizes: '64x64',
            type: 'image/png'
        },
        {
            src: './public/img/icon_32.png',
            sizes: '32x32',
            type: 'image/png'
        },
        {
            src: './public/img/icon_16.png',
            sizes: '16x15',
            type: 'image/png'
        }
    ] 
}
