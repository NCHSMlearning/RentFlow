# Production Edge Functions
Implement before enabling live payment or scheduled billing:
- mpesa-stk-push: initiate Daraja STK push using server-side secrets.
- mpesa-callback: validate callback, prevent duplicate references, atomically record payment and update invoice balance.
- generate-monthly-invoices: idempotently create monthly invoices for active leases.
- send-rent-reminders: deliver due/overdue reminders via configured email/SMS provider.
Never expose Daraja secrets, passkeys or Supabase service-role keys in VITE_ variables.
