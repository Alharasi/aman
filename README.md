# about.cv — Personal Profile Template

A fast, lightweight personal profile template built with Astro for presenting a professional identity, biography, expertise, and contact links. It supports Arabic and English and can run in a single-language or bilingual mode with a configurable default language.

**Template design & development: Ibrahim Alharrasi**

## Features

- Arabic-only, English-only, or bilingual mode.
- Configurable default language in bilingual mode.
- Automatic RTL and LTR switching.
- Responsive layout for mobile and desktop.
- Profile image customization by replacing a single image file.
- Core site data centralized in `src/data/site.ts` for straightforward manual or automated updates.
- Four default demo links (GitHub, LinkedIn, Instagram, and Website) show the supported icon system; empty links remain hidden.
- Built-in SEO: title, description, keywords, canonical URL, robots, sitemap, Open Graph, Twitter Cards, and Schema.org Person structured data.
- Social-sharing image based on the profile image.
- Fast, indexable static HTML suitable for static hosting.
- Smooth touch, mouse-wheel, keyboard, and navigation-button controls.
- Accessibility-oriented ARIA labels and interactive controls.
- No database or backend server required.

## Main Configuration File

The primary editable content is located in:

```text
src/data/site.ts
```

It contains settings for:

- Language mode: `ar`, `en`, or `both`.
- Default language: `ar` or `en`.
- Canonical site domain.
- Name and professional title.
- SEO title, description, and keywords.
- Biography and areas of expertise.
- Contact and social links.

## Profile Image

To change the profile image, replace this file:

```text
public/avatar.png
```

No additional profile-image configuration is required.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Project Check

```bash
npm run check
```

## Project Structure

```text
src/
├── components/    Interface components
├── data/          Site content and core configuration
├── layouts/       Page structure and SEO metadata
└── pages/         Main page, robots, and sitemap routes

public/
├── icons/         Contact and social icons
├── scripts/       Language and navigation behavior
├── styles/        Site styling
├── avatar.png     Profile image
└── favicon.svg    Browser icon
```

## Credits and License

**Template design & development: Ibrahim Alharrasi**

Copyright © 2026 Ibrahim Alharrasi. See `LICENSE` and `THIRD_PARTY_NOTICES.md` before redistributing the template.
