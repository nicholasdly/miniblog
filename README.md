# Miniblog

**Miniblog** is an opinionated and extremely minimal blogging template built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), whose design is heavily inspired by [jrmyphlmn.com](https://jrmyphlmn.com/). Incredibly easy to use and customize, you can use **Miniblog** as is, or add as much as you want to it.

- Blog post authoring using [Markdown](https://www.markdownguide.org/) and [MDX](https://mdxjs.com/) for component-style content
- Code block syntax highlighting with [Shiki](https://github.com/shikijs/shiki)
- [RSS](https://en.wikipedia.org/wiki/RSS) feed and sitemap generation
- SEO optimization, with customizable OpenGraph image support
- Code formatting with [Prettier](https://prettier.io/)
- Accessible view transitions
- Dark mode

## Getting Started

1. Click "Use this template", the big green button on the top right, to create a new repository with this template.

2. Clone the repository:

```bash
git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPO_NAME].git
cd [YOUR_REPO_NAME]
```

3. Install dependencies:

```bash
pnpm install
```

4. Start the development server:

```bash
pnpm dev
```

5. Optionally, format your code after making changes:

```bash
pnpm format
```

## Customization

**Miniblog** purposely keeps itself minimal, relying on no other web framework than Astro, and keeping styling simple through Tailwind and traditional CSS.

### Site Configuration

Edit the `src/consts.ts` file to update your information and site's metadata:

```ts
export const SITE_URL = "https://miniblog.nicholasly.com";
export const SITE_TITLE = "Miniblog";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const EMAIL = "hello@nicholasly.com";
```

### Blog Posts

Add new blog posts as Markdown or MDX files in the `src/content/posts/` directory. Use the following frontmatter structure:

```yml
---
title: "Lorem Ipsum"
description: "Lorem ipsum dolor sit amet."
date: "Nov 06 2024"
---
```

### Markdown Styling

All Markdown-specific CSS styling is customizable in `src/styles/global.css`:

```css
@layer components {
  article {
    /* ... */
  }
}
```

## License

This project is open source and available under the [MIT License](LICENSE).
