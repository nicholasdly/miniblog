---
title: 'What is Markdown?'
description: 'An example blog post showcasing how various Markdown elements are rendered.'
date: 'Apr 15 2026'
image: '../../assets/blog-placeholder-2.jpg'
---

# What is Markdown?

Markdown is a **lightweight markup language** created by John Gruber in 2004. It was designed with one core philosophy in mind: *a document should be readable as plain text, even before it's rendered.*

Today, Markdown is used **everywhere** — from GitHub READMEs and blog posts to documentation, note-taking apps, and even chat platforms.

## Why use Markdown?

**It's simple.** You don't need a rich text editor. All you need is a plain `.md` file and any text editor. The syntax is ***intuitive by design*** — wrapping a word in asterisks makes it bold, and that makes sense even without rendering.

**It's portable.** A Markdown file is just text. No proprietary formats, no corruption, no version incompatibility.

**It's widely supported.** Platforms that render Markdown include GitHub, GitLab, Reddit, Discord, Notion, Obsidian, and most static site generators like Jekyll and Hugo.

## Core Syntax

| Style | Syntax | Output |
|---|---|---|
| Bold | `**text**` | **text** |
| Italic | `*text*` | *text* |
| Bold + Italic | `***text***` | ***text*** |
| Strikethrough | `~~text~~` | ~~text~~ |
| Highlight | `<mark>text</mark>` | <mark>text</mark> |
| Superscript | `<sup>text</sup>` | E=mc<sup>2</sup> |
| Subscript | `<sub>text</sub>` | H<sub>2</sub>O |

Headings are prefixed with `#` symbols — one `#` for H1, two for H2, and so on.

Links follow the pattern `[text](url)`, and images/videos are nearly identical: `![alt text](image.png)`.

## Code in Markdown

One of Markdown's most powerful features for developers is its code formatting. For inline references, use single backticks: `const x = 42`

For multi-line blocks, use triple backticks with an optional language identifier:

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("World")); // Hello, World!
```

```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a

print(fibonacci(10))  # 55
```

## Blockquotes

Blockquotes are great for callouts, citations, or pull quotes:

> This is a blockquote. It can span multiple lines and is
> commonly used for referenced material or important callouts.

You can even cite attribution:

> "The overriding design goal for Markdown's formatting syntax is to make it as readable as possible."
> <cite>John Gruber[^1]</cite>

## Lists

Markdown supports unordered, ordered, and task lists:

- Item one
- Item two
  - Nested item
  - Another nested item

<br/>

1. First step
2. Second step
3. Third step

<br/>

- [x] Learn Markdown basics
- [x] Write your first `.md` file
- [ ] Master advanced syntax
- [ ] Build a static site with Markdown

## Extended Syntax

*Standard* Markdown covers the basics, but many parsers support **extended syntax**[^2] — including tables, footnotes, task lists, and the HTML-based formatting like <mark>highlighting</mark>, superscripts like E=mc<sup>2</sup>, and subscripts like H<sub>2</sub>O.

Support varies by parser, so always check what your platform supports before relying on extended features.

## Closing Thoughts

Markdown strikes a rare balance: it's ***simple enough for anyone to learn in an afternoon***, yet powerful enough to write entire books with[^3]. Whether you're a developer documenting an API or a blogger drafting a post, Markdown is one of the most valuable plain-text tools in your kit.

So open up a `.md` file and start writing — your future self will thank you.

[^1]: Gruber, John. *Markdown Syntax Documentation*. Daring Fireball, 2004.
[^2]: Extended Markdown is standardized in part by the **CommonMark** spec and tools like **GFM** (GitHub Flavored Markdown).
[^3]: The book *"The Plain Person's Guide to Plain Text Social Science"* by Kieran Healy is a real example of this.