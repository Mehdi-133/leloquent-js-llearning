# 🖼️ Mutability and Identity Images

| Asset | Format | Purpose | Used in | Explain it as | Status |
| --- | --- | --- | --- | --- | --- |
| [`mutability-concept-card.png`](mutability-concept-card.png) | PNG | Memorable concept opener | [Concept lesson](../README.md) | Two names may lead to one shared object; a copy has a new outer identity. | ✅ Verified |
| [`reference-identity-flow.svg`](reference-identity-flow.svg) | SVG | Exact technical flow | [Concept lesson](../README.md) | Follow the arrows, then compare the two `===` results. | ✅ Verified |
| [`deep-copy-methods.svg`](deep-copy-methods.svg) | SVG | Copy-method comparison | [Concept lesson](../README.md) | Assignment shares everything, shallow methods copy one level, and `structuredClone()` copies supported nested data. | ✅ Verified |

## ♿ Alt text

- **Concept card:** Two variables point to the same object, while a copied variable points to another outer object.
- **Identity flow:** `course` and `sameCourse` point to Object A, while `copiedCourse` points to Object B.
- **Copy methods:** Four JavaScript copy approaches compare whether the outer object and nested values remain shared.

## 🎨 Generation prompt

> Create a polished 16:9 educational concept-card illustration for JavaScript mutability and object identity. Visual metaphor: two pointer arrows from two separate variable tiles leading to the exact same glowing object box, while a third copied object sits separately. Use a clean modern flat vector/isometric style, dark charcoal background, warm cream panels, bold golden yellow accents, small coral warning accent, crisp geometry, generous negative space, professional programming-course presentation aesthetic. No readable text, no letters, no logos, no watermark, no code syntax. The relationships must be visually obvious and uncluttered.
