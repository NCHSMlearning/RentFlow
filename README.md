# RentFlow 🏠

**Property management for landlords, agents and tenants.** RentFlow brings properties, units, tenant onboarding, recurring charges, rent collection, water billing, garbage fees and maintenance into one workspace.

## Technology
- React 18 + Vite + TypeScript
- Supabase Auth + PostgreSQL + Row Level Security
- Recharts for portfolio analytics
- KES currency formatting and Kenya-first workflows

## Run locally
1. Install Node.js 20 or later.
2. Clone this repository and run `npm install`.
3. Copy `.env.example` to `.env`.
4. Add your Supabase project URL and anon key to `.env`.
5. Run the SQL migration in `supabase/migrations/001_initial_schema.sql` using the Supabase SQL Editor.
6. Start with `npm run dev`; create a production build with `npm run build`.

## Current foundation
- Landlord and tenant dashboard views (use the view switcher in the header).
- Portfolio KPIs, rental income chart and occupancy overview.
- Unit list with tenant, property, rent, water, garbage and occupancy status.
- Tenant registration form prototype and tenant bill/payment summary.
- PostgreSQL schema for profiles, properties, units, leases, invoices, invoice items, payments, water readings, maintenance requests and audit logs.
- Row Level Security policies that scope landlord access to owned properties and tenant access to their own active lease.
- Profile role-change protection trigger.

## Supabase first landlord setup
Create the first user in Supabase Authentication, then run the one-time profile insert in [supabase/seed/README.md](supabase/seed/README.md). Role assignment must be performed by a trusted administrator/server process; never let a user promote their own account.

## Important implementation status
The current UI contains demonstrator data and form prototypes. It is **not yet a production-connected rental ledger**. Supabase credentials and migration must be configured, then the CRUD screens, invoice generation, receipts, notifications and reporting must be wired to live data. Do not rely on demo amounts for actual tenant balances.

## M-Pesa and scheduled billing
Daraja STK Push, callback verification, automatic monthly invoice generation and SMS/email reminders are documented in [supabase/functions/README.md](supabase/functions/README.md), but are not deployed. They must run server-side using secrets, with idempotency and verified callbacks. Never place a service-role key, Daraja consumer secret or passkey in a `VITE_*` variable.

## Security notes
- Keep the Supabase service-role key server-side only.
- Review and test all RLS policies with separate landlord and tenant accounts before importing real tenant data.
- Payment status must only be changed by a trusted server-side payment callback or authorized reconciliation process.
- Keep an audit trail for rent/charge edits, invoice adjustments and payment reversals.

## Roadmap
1. Supabase auth, account invitations and landlord/property-manager role provisioning.
2. Live property, unit, tenant and lease management.
3. Idempotent monthly billing with charge snapshots and rent-change history.
4. M-Pesa STK push, callback validation, reconciliation and digital receipts.
5. Tenant statements, arrears reminders, maintenance workflow and exports.
6. Automated tests, accessibility review and production deployment.
