# AGENTS.md

# The Little Archive — Project Development Guidelines

## 1. Project Overview

The Little Archive is a personal digital archive for collecting and presenting thoughts, literature, indie games, and character studies.

The project combines a personal digital garden with an independent game archive.

Its purpose is to provide a quiet, warm, and aesthetically consistent space for preserving personal interests, creative writings, and cultural observations.

The website must support continuous expansion. New articles and categories should be added without rebuilding the entire website.

### Main Sections

- Home: Featured collections, recent articles, and project introduction.
- Writings: Personal essays and life observations.
- Games: Indie game introductions and reviews.
- Characters: Character analysis and narrative studies.
- Reading: Book notes and literary reflections.
- About: Project introduction and archive philosophy.

## 2. Design System

### 2.1 Visual Direction

Combine dark academia aesthetics with a warm personal library atmosphere.

The overall design should feel:
- Quiet and intimate.
- Literary and editorial.
- Warm but slightly mysterious.
- Minimalist rather than overly decorative.

### 2.2 Color Palette

Use the following colors consistently:

- Primary background: #222321
- Secondary background: #30302D
- Primary text: #F0EBDD
- Secondary text: #B8AE9D
- Accent color: #B59A68
- Border color: #48463F

Avoid introducing unrelated accent colors without a clear reason.

### 2.3 Typography

- Use serif typography for major headings and editorial titles.
- Use readable sans-serif typography for body text and navigation.
- Maintain clear visual hierarchy.
- Ensure comfortable line spacing for long-form reading.

### 2.4 Layout

- Use spacious layouts and comfortable reading widths.
- Maintain consistent navigation and footer styles.
- Use editorial-style cards for featured content.
- Keep images proportional and avoid distortion.
- Avoid excessive animations and decorative effects.
- Support desktop, tablet, and mobile screens.

## 3. Technology Stack

The project uses:

- HTML5: Page structure.
- CSS3: Visual design and responsive layouts.
- Vanilla JavaScript: Interactions and content loading.
- Markdown: Article storage.
- Marked.js: Markdown-to-HTML conversion.
- DOMPurify: Sanitizing rendered HTML.
- JSON: Article catalog and metadata.
- GitHub Pages: Static website hosting.

### Technical Constraints

- Do not introduce React, Vue, or other frontend frameworks unless explicitly requested.
- Do not introduce a backend server or database.
- Keep the project compatible with static hosting.
- Use relative paths where necessary for GitHub Pages project websites.
- Do not rely on local file system access in browser JavaScript.
- Load local content using fetch() through a local development server or GitHub Pages.

## 4. Directory Structure

Follow this project structure:

```text
The-Little-Archive/
│
├── AGENTS.md
├── README.md
├── index.html
│
├── pages/
│   ├── writings.html
│   ├── games.html
│   ├── characters.html
│   ├── reading.html
│   ├── about.html
│   └── article.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── content.js
│   └── article.js
│
├── content/
│   ├── catalog.json
│   ├── writings/
│   ├── games/
│   ├── characters/
│   └── reading/
│
└── assets/
    ├── images/
    └── covers/
```

### File Responsibilities

- `index.html`: Main homepage.
- `pages/`: Category pages and shared article page.
- `css/style.css`: Shared visual styles.
- `js/main.js`: Homepage and navigation interactions.
- `js/content.js`: Content catalog loading and filtering.
- `js/article.js`: Individual article rendering.
- `content/catalog.json`: Central metadata catalog.
- `content/`: Markdown article files.
- `assets/images/`: General website images.
- `assets/covers/`: Article and game cover images.
- `AGENTS.md`: AI development guidelines.
- `README.md`: Project documentation.

Do not create duplicate files or unnecessary folders.

## 5. Content Management Rules

### 5.1 General Rules

- Store long-form content in Markdown files.
- Register every article in `content/catalog.json`.
- Use UTF-8 encoding.
- Use lowercase English filenames with hyphens.
- Keep article content separate from HTML templates.
- Use relative asset paths compatible with GitHub Pages.
- Do not create a separate HTML file for every article.

### 5.2 Article Categories

Use these fixed category identifiers:

- `writings`
- `games`
- `characters`
- `reading`

Every article must belong to one of these categories unless a new category has been explicitly approved.

### 5.3 Markdown Article Format

Markdown files contain the article body.

Article metadata must be maintained in `content/catalog.json`, not duplicated in Markdown front matter.

Example:

```markdown
# Apple Pie and Cinnamon

Recently, I went out for dessert with a friend.

I like the smell of cinnamon and the warmth of apple pie.

## Personal Thoughts

Some ordinary moments are worth remembering.
```

### 5.4 Content Catalog Format

Each article must have an entry in `content/catalog.json`.

Use this structure:

```json
[
  {
    "id": "apple-pie",
    "title": "Apple Pie and Cinnamon",
    "date": "2026-11-13",
    "category": "writings",
    "description": "A personal reflection about dessert and everyday moments.",
    "cover": "assets/covers/apple-pie.jpg",
    "file": "content/writings/apple-pie.md"
  }
]
```

Required fields:

- `id`: Unique article identifier.
- `title`: Article title.
- `date`: Publication date in YYYY-MM-DD format.
- `category`: Article category.
- `description`: Short introduction.
- `file`: Relative path to the Markdown file.

The `cover` field is optional.

Never duplicate an existing article ID.

### 5.5 Category Content Templates

Writings:
- Title
- Date
- Main text
- Optional images

Games:
- Game title
- Developer
- Release information, when known
- Game introduction
- Gameplay
- Personal review

Characters:
- Character introduction
- Background
- Personality
- Relationships
- Character analysis

Reading:
- Book information
- Author
- Main themes
- Reading notes
- Personal reflections

Templates are guidelines, not mandatory headings. Preserve the author's writing style and avoid forcing unnecessary sections.

### 5.6 Factual Accuracy

- Do not invent factual information about games, books, authors, or characters.
- Distinguish personal opinions from verified information.
- Use unknown or unverified when information cannot be confirmed.
- Do not modify the author's original writing without permission.

## 6. Development Rules

### 6.1 Before Modifying the Project

Always:

1. Read this AGENTS.md file.
2. Inspect the existing directory structure.
3. Identify existing components and styles.
4. Understand how the relevant pages load their content.
5. Determine which files need modification.

### 6.2 When Adding a New Article

Follow these steps:

1. Create a Markdown file in the correct category folder.
2. Follow the corresponding content guidelines.
3. Add an entry to `content/catalog.json`.
4. Assign a unique article ID.
5. Add a cover image if available.
6. Verify that the article appears on the correct category page.
7. Verify that the article can be opened through the shared article template.

Do not create a new HTML page for an ordinary article.

### 6.3 When Adding a New Category

Follow these steps:

1. Confirm the new category with the project owner.
2. Create its content directory.
3. Create its category page.
4. Update website navigation.
5. Update content loading and filtering logic.
6. Define its content template.
7. Update this documentation.

### 6.4 When Modifying Existing Pages

- Preserve existing navigation and footer components.
- Reuse existing CSS classes where possible.
- Avoid duplicating shared code.
- Keep the website's visual identity consistent.
- Do not remove existing content without permission.
- Avoid unrelated changes when implementing a specific feature.

## 7. Responsive Design

All pages must support:

- Desktop screens.
- Tablet screens.
- Mobile screens.

Requirements:

- Navigation must remain usable on small screens.
- Article cards must adapt to available width.
- Images must scale proportionally.
- Text must remain readable.
- Avoid unwanted horizontal scrolling.

## 8. Security and Accessibility

- Sanitize Markdown-generated HTML before inserting it into the page.
- Avoid unsafe HTML insertion from untrusted content.
- Use semantic HTML elements.
- Provide alternative text for meaningful images.
- Maintain sufficient text contrast.
- Ensure links and buttons have understandable labels.

## 9. Quality Assurance

Before completing any modification, verify:

- HTML structure is valid.
- CSS paths and JavaScript paths are correct.
- JSON syntax is valid.
- Markdown files can be loaded.
- Article links work.
- Image paths are correct.
- Navigation works across pages.
- No major browser console errors occur.
- Desktop and mobile layouts are usable.
- GitHub Pages can load all resources correctly.

Use a local development server to test the website rather than opening HTML files directly through `file://`.

## 10. Documentation and Communication

When completing a development task, explain:

1. What was added or modified.
2. Which files were changed.
3. Whether any new dependencies were introduced.
4. What tests were performed.
5. Whether additional manual steps are required.

Update README.md when major project features or setup instructions change.

Update AGENTS.md whenever the project's development rules or architecture change.

## 11. Core Principles

- Consistency is more important than unnecessary complexity.
- Keep content and presentation separate.
- Prefer reusable solutions over duplicated code.
- Preserve the author's original voice.
- Maintain the established visual identity.
- Make every new feature compatible with the existing architecture.
- Build a website that can grow naturally over time.

Every new page, article, and collection should feel like part of The Little Archive.
