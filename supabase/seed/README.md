# First landlord account
1. Create a user in Supabase Authentication.
2. Copy the user's UUID from Authentication → Users.
3. Run once in SQL Editor, replacing the UUID and name:
```sql
insert into public.profiles(id,full_name,role)
values ('YOUR_AUTH_USER_UUID','Your Name','landlord');
```
Do not expose the Supabase service-role key in browser code. New landlord/property-manager role assignment must happen through a trusted server-side workflow.
