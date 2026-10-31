-- Follow-up authorization policies for invoice and tenant-profile workflows.
drop policy if exists profiles_owner_read_linked_tenants on public.profiles;
create policy profiles_owner_read_linked_tenants on public.profiles for select using (
 exists(select 1 from public.leases l join public.units u on u.id=l.unit_id join public.properties p on p.id=u.property_id where l.tenant_id=profiles.id and p.owner_id=auth.uid())
);
drop policy if exists invoices_landlord_manage on public.invoices;
create policy invoices_landlord_manage on public.invoices for all using (
 exists(select 1 from public.leases l where l.id=lease_id and public.owns_unit(l.unit_id))
) with check (
 exists(select 1 from public.leases l where l.id=lease_id and public.owns_unit(l.unit_id))
);
drop policy if exists payments_landlord_record on public.payments;
create policy payments_landlord_record on public.payments for insert with check (
 recorded_by=auth.uid() and exists(
  select 1 from public.invoices i join public.leases l on l.id=i.lease_id
  where i.id=invoice_id and public.owns_unit(l.unit_id) and l.tenant_id=tenant_id
 )
);
drop policy if exists payments_landlord_update on public.payments;
create policy payments_landlord_update on public.payments for update using (
 exists(select 1 from public.invoices i join public.leases l on l.id=i.lease_id where i.id=invoice_id and public.owns_unit(l.unit_id))
) with check (
 exists(select 1 from public.invoices i join public.leases l on l.id=i.lease_id where i.id=invoice_id and public.owns_unit(l.unit_id) and l.tenant_id=tenant_id)
);
