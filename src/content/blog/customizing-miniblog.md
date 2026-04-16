---
title: "Customizing Miniblog"
description: "The basics of how to customize this template."
date: "Apr 15 2026"
image: "../../assets/blog-placeholder-2.jpg"
---

# Customizing Miniblog

_Blog posts._ Write them as Markdown files in `src/content/blog/`. Be sure to include the necessary frontmatter.

_General styling._ All of the styling for posts and the majority of the website are found in `src/styles/global.css`.

_Syntax highlighting._ Update the `markdown.shikiConfig.theme` field in `astro.config.mjs`.

_Fonts._ Update `fonts` field in `astro.config.mjs`. Be sure to update `src/components/Head.astro` after.

_Frontmatter._ Update `src/content.config.ts`.

_Site information._ Update the `src/consts.ts` file to change the base site title, description, and URL.

_OG images._ Add them to `src/assets/`. Reference them in your Markdown frontmatter. Assign a default OG image in `src/layouts/Layout.astro`.

_Favicons._ Switch them out in `public/`.

_Other._ This project is a simple Astro template at the end of the day. Read the official [Astro docs](https://docs.astro.build/en/getting-started/) for more information.
