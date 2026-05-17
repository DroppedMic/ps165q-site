# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **single-file static marketing site** for P.S. 165Q Edith K. Bergtraum School (Flushing, Queens — NYC DOE District 25). The entire site lives in `index.html` and is deployed to GitHub Pages at `https://droppedmic.github.io/ps165q-site/`.

There is **no build step, no package manager, no test suite, no linter, no framework**. The repo contains exactly one source file plus `.git/`. Don't introduce tooling, bundlers, or split the file into separate `.css` / `.js` assets unless the user explicitly asks for it — keeping everything inline is intentional (one HTTP request, GitHub Pages friendly, easy to hand off).

## Working on the site

- **Preview locally**: open `index.html` directly in a browser, or run a one-liner static server (e.g. `python3 -m http.server`) from the repo root. There is no dev server to start.
- **Deploy**: pushing to `main` is the deploy step — GitHub Pages serves `index.html` from the repo root. There is no CI, no release process.
- **Branch policy for Claude sessions**: develop on the designated feature branch (currently `claude/add-claude-documentation-NWE9F`), never push directly to `main` without explicit permission.
- **No automated tests exist.** "Testing" means opening the file in a browser and visually verifying. If a change affects layout, also check at narrow widths — the layout has a 1024px breakpoint where the nav switches to a hamburger and the hero grid stacks.

## File anatomy (`index.html`)

The file is structured into three large blocks, in order:

1. **`<head>` (lines 1–329)** — meta tags, OpenGraph/Twitter cards, JSON-LD `School` schema (used for SEO; keep it in sync when school facts change: principal, APs, phone, address, social links), Google Fonts preconnect + stylesheet (`Fraunces` + `Plus Jakarta Sans`), then a single large inline `<style>` block.
2. **`<body>` markup (lines 330–597)** — sections are separated by `<!-- SECTION -->` comments and appear top-to-bottom in this order: `TOPBAR → NAV → MOBILE MENU → HERO → TICKER → QUICK ACCESS → ABOUT → MISSION → STATS → PROGRAMS → PS CTA → LEADERSHIP → CALENDAR → COMMUNITY → CONTACT → FOOTER`. Use these comments to navigate; each is a self-contained `<section>` with its own class prefix (`hero-*`, `qa-*`, `about-*`, etc.).
3. **Inline `<script>` (lines 599–635)** — vanilla JS in an IIFE. Handles scroll progress bar, sticky-nav shadow, hamburger toggle, IntersectionObserver-driven scroll reveal for `.rv` elements, mission-section star generation, back-to-top button, and smooth in-page anchor scrolling. No external JS dependencies.

## Conventions to follow

- **Design tokens are CSS custom properties** declared on `:root` (lines ~22–34): `--navy`, `--gold`, `--cream`, plus accent colors (`--blue`, `--coral`, `--green`, `--plum`) each with a `-soft` variant for tinted backgrounds, plus `--max-w` (content width) and `--ease`. Use these instead of hardcoding colors — the navy/gold palette is the school's identity and is intentionally consistent across sections.
- **Typography**: `Fraunces` (serif) for headings (`h1`–`h4`), `Plus Jakarta Sans` for body. The base body size is `1.125rem` with `line-height: 1.8` — the high line-height is a deliberate readability choice; don't tighten it without reason.
- **Scroll reveal**: add the class `rv` to any element that should fade in on scroll. Add `rv-d1` / `rv-d2` / `rv-d3` / `rv-d4` for staggered delays. The IntersectionObserver attaches `.v` when the element enters view; `prefers-reduced-motion: reduce` bypasses the animation.
- **Icons are inline SVGs**, written directly in the HTML with `stroke="currentColor"` so they inherit text color. The favicon and OG image are SVG data URIs in the `<head>`. Don't add image files — keep this site asset-free.
- **Accessibility**: a `Skip to main content` link, `aria-label`s on nav/icon-only buttons, `aria-expanded` on the hamburger, `aria-hidden` on decorative elements, and reduced-motion respect are all in place — preserve these when editing.
- **External links** use `target="_blank" rel="noopener"`. Internal anchors use smooth scrolling via the JS handler at the bottom.
- **CSS is minified-ish** (single-line rules, no extra whitespace) to keep the file compact. Match the surrounding style when adding rules; don't reformat the existing CSS.

## When making changes

- **School facts** (principal name, phone, address, grades, program names like G&T / NEST, social handles, "since 1960", "65+ years") appear in **multiple places**: the JSON-LD schema in `<head>`, the topbar, the hero, the about section, the leadership section, the contact section, and the footer. When updating any fact, grep for it and update every occurrence — the JSON-LD especially is easy to miss and feeds Google's knowledge panel.
- **Commit messages** in this repo follow the pattern `V<n>: <short description of the redesign theme>` for full redesigns (the history is V1 → V9) and free-form for smaller changes. Match the existing tone when committing.
- Because everything is one file, **diffs are easy to review** — prefer small, targeted edits over wholesale rewrites unless the user is asking for another full redesign pass.
