# Frontend UI Review Checklist

Run this before finalizing major design edits.

## Visual System

- One clear art direction is visible across the page.
- Typography scale is consistent across headings, body, and labels.
- Color tokens are reused; one-off hex values are minimized.
- Spacing and radius values follow a repeatable rhythm.

## Layout and Responsiveness

- Mobile layout works without overflow or cramped touch targets.
- Desktop layout uses width and whitespace intentionally.
- Sections preserve hierarchy at all breakpoints.
- Cards and grids collapse predictably.

## Interaction and Accessibility

- Interactive elements have hover/focus/active states.
- Keyboard focus is visible and not removed.
- Semantic elements are used (`main`, `section`, `header`, lists, buttons, links).
- Text contrast and readability are acceptable on all surfaces.

## Performance and Maintainability

- No unnecessary client component conversions.
- Animations are lightweight and purposeful.
- Repeated patterns are extracted or standardized.
- Styles remain understandable for future edits.

## Validation

- Run `npm run lint`.
- Run `npm run build` for high-impact changes when feasible.
- Report what was and was not validated.

