// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import keystatic from "@keystatic/astro"; // 1. Keystatic 임포트 추가
import { SITE_URL } from "./src/consts";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: '/',
  output: 'static', // 2. 관리자 UI API 동작을 위해 'hybrid' 설정 필수 추가
  integrations: [mdx(), sitemap(), tailwind(), // 3. Keystatic 인티그레이션 추가
  keystatic(), react()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
  },
});