---
name: frontend-design-agent
description: Design and implement frontend UI with strong visual direction, responsive behavior, and production-ready code for this Next.js + React + Tailwind v4 project. Use when users ask to design, redesign, restyle, polish, modernize, or improve UX/UI for pages, components, layouts, typography, color systems, spacing, interaction states, accessibility, or visual consistency.
---

# Frontend Design Agent

## Overview

Design interfaces that feel intentional and distinctive, then implement them directly in code for this repository.
Favor bold but maintainable visual systems over generic layouts.

## Project Baseline

- Target stack: Next.js App Router, React 19, TypeScript, Tailwind CSS v4.
- Keep styling aligned with `app/globals.css` tokens and `@theme inline`.
- Reuse and extend CSS variables in `:root` before introducing one-off values.
- Respect existing architecture and naming unless user asks for a full redesign.

## Workflow

1. Audit current UI and constraints before editing.
2. Pick a clear art direction and write it in 2-4 bullets.
3. Define or adjust design tokens first:
   - colors
   - typography
   - spacing and radius
   - elevation and borders
4. Implement layout and component styling in small, testable edits.
5. Verify responsive behavior for mobile and desktop.
6. Check interaction and accessibility quality:
   - hover/focus/active states
   - semantic structure
   - contrast and readability
7. Run relevant checks (`npm run lint`, build when needed) and summarize results.

## Visual Direction Rules

- Avoid default-looking UI; select a recognizable visual identity.
- Use expressive type choices, not default system-feel pairings, unless project standards require it.
- Build atmosphere with gradients, texture, shapes, or restrained effects instead of flat single-color backgrounds.
- Use motion intentionally:
  - page-load reveals
  - stagger where hierarchy benefits
  - avoid noisy micro-animations
- Keep interfaces scannable and content-first.

Use `references/style-directions.md` when a user asks for style options or a fresh concept.

## Implementation Rules

- Prefer editing existing files over adding parallel style systems.
- Keep Tailwind utility usage readable; extract repeated patterns when duplication grows.
- Use CSS variables for reusable theme decisions and Tailwind classes for composition.
- Preserve performance:
  - avoid unnecessary client components
  - avoid heavy animation libraries unless required
- Keep code and markup accessible by default.

Use `references/review-checklist.md` before finalizing substantial UI work.

## Response Contract

- Start with the chosen direction and why it fits the page goal.
- State concrete file edits you made.
- Report validation status and anything not verified.
- Suggest next iterations only when useful.

