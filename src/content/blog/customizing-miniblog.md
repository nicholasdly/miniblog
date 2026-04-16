---
title: 'Customizing Miniblog'
description: 'The basics of how to customize this template.'
date: 'Apr 15 2026'
image: '../../assets/blog-placeholder-2.jpg'
---

# Customizing Miniblog

*Blog posts.* Write them as Markdown files in `src/content/blog/`. Be sure to include the necessary frontmatter.

*General styling.* All of the styling for posts and the majority of the website are found in `src/styles/global.css`.

*Syntax highlighting.* Update the `markdown.shikiConfig.theme` field in `astro.config.mjs`.

*Fonts.* Update `fonts` field in `astro.config.mjs`. Be sure to update `src/components/Head.astro` after.

*Frontmatter.* Update `src/content.config.ts`.

*Site information.* Update the `src/consts.ts` file to change the base site title, description, and URL.

*OG images.*  Add them to `src/assets/`. Reference them in your Markdown frontmatter. Assign a default OG image in `src/layouts/Layout.astro`.

*Favicons.* Switch them out in `public/`.

*Other.* This project is a simple Astro template at the end of the day. Read the official [Astro docs](https://docs.astro.build/en/getting-started/) for more information.