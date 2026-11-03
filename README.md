# GIU Software Project I — Practice Assignment 6

This is a Next.js 16 App Router frontend solution. The supplied Todo backend is intentionally not included or modified.

## 1. Start the backend

In the backend starter folder supplied on CMS:

```bash
npm install
npm run start:dev
```

It should run at `http://localhost:3000`.

## 2. Start this frontend

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

The frontend runs at `http://localhost:3001`.

`API_URL` is used by Server Components and Route Handlers. `NEXT_PUBLIC_API_URL` is used by browser-side forms and buttons. Both point to the given backend.

## 3. Important tests

- `/` — statistics fetched through `/api/stats`.
- `/todos` — list and status filters.
- `/todos/new` — create a todo.
- `/todos/1` — details page (replace 1 with an existing ID).
- `/todos/999999` — custom not-found page (assuming this ID does not exist).
- Stop the backend while opening `/todos` to test `error.tsx`; restart it and click Try again.
- `/todos/5/edit` — catch-all slug array.
- `/help/todos/create` — breadcrumb.
- `/archive` and `/archive/2025` — optional catch-all.
- `/playground/a` and `/playground/b` — layout counter persists; template counter resets on navigation.
- `/dashboard` — redirects to `/login` until the `demo-auth=1` cookie is set.
- From `/todos`, click a todo to see the intercepted modal. Refresh that URL to see the full details page.

## 4. Route priority check

- `/todos/new` opens the static `new` page, not `[id]`.
- `/todos/5` opens the dynamic `[id]` details page, not `[...slug]`.
- `/todos/5/edit` opens `[...slug]`, because it contains multiple path segments after `/todos`.

## 5. Notes

- Route groups `(main)` and `(auth)` do not appear in URLs.
- `_components` is a private folder and does not create a route.
- The backend must allow browser requests from `http://localhost:3001` (CORS) for the create and delete client-side requests.
- The assignment's backend response shape is assumed to be `{ id, title, done }`, and the create endpoint's validation message is displayed when available.
