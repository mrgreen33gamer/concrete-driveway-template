# Concrete Driveway Template — Design Spec

## Context

Scott Apps sells a family of near-identical Next.js marketing-site templates, one per trade, each forked from `hvac-template` and re-skinned. This run forks `hvac-template` into `concrete-driveway-template`, following `RESKIN_PLAYBOOK.md`.

Concrete is **gallery-first**: keep and rebuild `/projects` (portfolio of pours). Per-city SEO subpages (`waco-tx` / `temple-tx` / `killeen-tx`) are **deleted**.

## Business Identity (locked)

- **Business name:** IronPath Concrete
- **Tagline:** Driveways · Patios · Foundations Done Right
- **Location:** Waco, TX (home base)
- **Service area cities:** Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead
- **Founded:** 2008
- **Owner:** Ray Delgado
- **Credential/license line:** ACI-Trained Finishers · Bonded & Insured
- **Guarantee:** 5-Year Workmanship Warranty
- **Social proof:** 4.9★, 900+ reviews, 4,000+ pours
- **Brand accent:** amber/brown `#b45309` (`$orange` + hardcoded hex loaders)
- **Phone:** (254) 750-4400 / `tel:+12547504400`
- **Email:** hello@ironpathconcrete.com
- **Domain:** ironpathconcrete.com
- **Address:** 1800 S University Parks Dr, Waco, TX 76706

## Services (6)

| Old HVAC slug | New slug | Title |
|---------------|----------|-------|
| ac-repair | driveways | Driveways |
| heating | patios-walkways | Patios & Walkways |
| installation | foundations | Foundations |
| duct-cleaning | stamped-decorative | Stamped & Decorative Concrete |
| indoor-air-quality | concrete-repair | Concrete Repair |
| maintenance | commercial-flatwork | Commercial Flatwork |

## Industries (3)

| Old | New slug | Title |
|-----|----------|-------|
| automotive | homebuilders | Homebuilders |
| manufacturing | property-management | Property Management |
| oil-gas | municipalities | Municipalities & Public Works |

## Blogs (3)

1. `how-long-before-drive-on-new-concrete`
2. `stamped-vs-broom-finish-texas`
3. `foundation-cracks-when-to-call`

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3), **Projects** (gallery index + `[slug]` case studies). No per-city SEO.

## Projects (KEEP + rebuild)

Gallery-first portfolio using `libs/local-db/projects.ts` + `ProjectCardGrid` / `BeforeAfter` / case-study routes. Categories align to the six services.

## Non-goals

- No marketplace catalog flip (separate pass on `scottapplications`).
- No new component primitives — sibling-clone of existing page shapes.
- Do not commit `.env` / Mapbox `pk.eyJ…` tokens.

## Success criteria

- `npm run typecheck` passes
- Grep clean of HVAC / Arctic Air / old phone / Mapbox pk tokens / vendor identity leaks
- Accent `#b45309` in SCSS tokens and hardcoded loaders
- City SEO deleted; projects gallery live
