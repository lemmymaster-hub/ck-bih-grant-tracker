# CK BiH Grant Tracker

A funding and support tracker designed around the structure of Red Cross organisations in Bosnia and Herzegovina.

## Status

Portfolio source snapshot prepared on 5 November 2026. Active development; feature descriptions are based on the retrieved source, not a claim of external production validation.

## What it does

- Filter opportunities for DCK BiH, CKRS, CKFBiH and CKBD or joint work.
- Compare fit, eligibility, deadlines, support type and assessment.
- Keep research project guidance separate from user notes and status.
- Persist records and research logs in D1.
- Validate records and detect conflicting revisions.

This is an independently developed tool for a humanitarian use case. It does not imply institutional endorsement. Packaged data is fictional.

## Interface reasoning

Organisation-specific filters follow how a user decides which legal entity may apply. Project guidance turns a listing into an actionable concept while staying separate from personal working notes. Detailed assessments remain accessible without making every table row taller.

## Run and inspect

The full-stack source uses React/TypeScript, Vinext/Vite, Cloudflare Workers and D1. Node.js >=22.13 and pnpm matching package.json are required. See STARTER_SETUP.md.

Install with `pnpm install --frozen-lockfile`, then use `pnpm dev`. Full operation requires creating the local D1 schema from db/schema.ts and bootstrapping the fictional seed. The source manifest omits the original Site project ID; a new deployment needs its own project and database bindings. Review API write access before exposing a new deployment publicly. This is a source snapshot; standalone deployment has not been verified.

## Contribution and tooling

Mile Vujasin: product requirements, interface direction, iterative design decisions and implementation work using AI-assisted development. Third-party frameworks, libraries and bundled assets remain the work of their respective authors. This repository does not claim that every line was manually written or that user-research outcomes have been formally measured.

## Portfolio hygiene

No Git history, production database export, private workflow notes, authentication tokens or original hosting project identity are included. A separate environment is needed for backend operations. No open-source licence for the original application is granted by this snapshot; third-party notices are retained.
