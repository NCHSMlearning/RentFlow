# ESTORA — Property Management Platform

**Property management for agencies, agents, landlords and tenants.** ESTORA is being developed as a multi-agency property management platform: each agency will have its own workspace, users and isolated operational records, while platform administration provides central oversight.

## Product identity
- Platform: ESTORA
- Positioning: Property Management, Connected
- Tagline: Property management, without the complexity.
- Primary roles: Platform Super Admin, Agency Admin, Agent, Landlord and Tenant
- Initial market workflows: Kenya-first, with KES currency support

## Technology
- React 18 + Vite + TypeScript
- Supabase Auth + PostgreSQL + Row Level Security
- Recharts for portfolio analytics
- KES currency formatting and Kenya-first workflows

## Run locally
1. Install Node.js 20 or later.
2. Clone this repository and run `npm install`.
3. Copy `.env.example` to `.env`.
4. Add your Supabase project URL and publishable/anon key to `.env`.
5. Apply the SQL migrations for the relevant application schema.
6. Start with `npm run dev`; create a production build with `npm run build`.

## Product foundation
- Landlord and tenant dashboard views in the React application.
- Portfolio KPIs, rental income chart and occupancy overview.
- Unit list with tenant, property, rent, water, garbage and occupancy status.
- Tenant registration form prototype and tenant bill/payment summary.
- Supabase schema and role-aware Row Level Security foundation.
- Separate role-based demo centre published at `/RentFlow/demo/`.

## Role-based demo centre
- Agency workspace: `/RentFlow/demo/agent/`
- Platform administration: `/RentFlow/demo/superadmin/`
- Landlord portal: `/RentFlow/demo/landlord/`
- Tenant portal: `/RentFlow/demo/tenant/`

The demo uses clearly labelled sample records and browser-local storage. Creating or editing demo records does not update Supabase, send real notifications, or process payments. Demo pages are product walkthroughs only.

## Current implementation status
The platform is under active development. The Agent Admin and Tenant sign-in path has been connected to Supabase Auth, and selected agency operations have been connected to the `rentflow` schema. The current UI still contains demonstrator data and form prototypes. Do not rely on demo amounts for actual tenant balances. Before production onboarding, complete end-to-end CRUD verification, agency provisioning, account invitations, invoice generation, payment reconciliation, notifications, reporting and tenant/landlord portal integration.

## Payments and scheduled billing
Daraja STK Push, callback verification, automatic monthly invoice generation and SMS/email reminders require secure server-side implementation. They must use server-side secrets, idempotency and verified callbacks. Never place a service-role key, Daraja consumer secret or passkey in a `VITE_*` variable.

## Security notes
- Keep the Supabase service-role key server-side only.
- Test RLS with separate platform, agency, landlord and tenant accounts before importing real data.
- Never allow users to promote their own role or change their agency assignment.
- Payment status must only be changed by a trusted server-side payment callback or authorized reconciliation process.
- Keep an audit trail for rent/charge edits, invoice adjustments and payment reversals.

## Roadmap
1. Complete platform-level agency onboarding and secure agency-admin provisioning.
2. Finish live property, unit, tenant, landlord and lease CRUD.
3. Implement idempotent monthly billing with charge snapshots and rent-change history.
4. Add M-Pesa STK push, callback validation, reconciliation and digital receipts.
5. Complete tenant/landlord portals, statements, arrears reminders, maintenance workflow and exports.
6. Add automated tests, accessibility review and production deployment.

> Branding has been updated to ESTORA. The repository and existing Supabase schema identifiers remain unchanged to avoid breaking deployment paths and database integrations during the rebrand.
