import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import { VitePWA } from 'vite-plugin-pwa';
import { manifest } from '/src/scripts/configPWA';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  vite:{
    plugins:[
      VitePWA({
        injectRegister: 'auto',
        manifest,
        workbox:{
          globDirectory: 'dist',
          globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'],
          navigateFallback: null,
        }
      })
    ]
  }
});