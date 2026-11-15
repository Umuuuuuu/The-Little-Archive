# The Little Archive

*A personal archive of thoughts, stories, and games.*

## About

The Little Archive is a personal digital archive dedicated to collecting thoughts, literary reflections, indie games, and character studies.

It combines a personal digital garden with an independent game archive, creating a quiet and warm space for preserving personal interests and creative ideas.

## Categories

- **Writings** — Personal essays and everyday observations.
- **Games** — Indie game introductions and reviews.
- **Characters** — Character analysis and narrative studies.
- **Reading** — Book notes and literary reflections.

## Design

The website combines dark academia aesthetics with a warm personal library atmosphere.

## Technology

- HTML
- CSS
- JavaScript
- Markdown
- GitHub Pages

## Project Goal

To build an expandable personal archive where new articles and collections can be added consistently through reusable templates and AI-assisted development.


## Adding an Article

1. Create a Markdown file in the matching folder under `content/`.
2. Add its metadata to `content/catalog.json` with a unique `id`.
3. Use the shared page at `pages/article.html?id=your-article-id` to display it.
4. Preview the website through a local development server (for example, VS Code Live Server). Do not open pages directly with `file://`, because the article catalog and Markdown files are loaded with `fetch()`.

Markdown is rendered with Marked.js and sanitized with DOMPurify before it is inserted into the page.
