# Mears Law — Sanity Studio

Local Studio for the `insight` content type used on `/insights`.

```bash
cd studio-mears-law-website
npm install
npm run dev
```

In [Sanity manage](https://sanity.io/manage), add your site origin (e.g. `http://localhost:3000`) under **API → CORS origins** so the Next app can fetch content.

**Hosted Studio:** [https://mearslaw.sanity.studio](https://mearslaw.sanity.studio) — sign in with a Sanity account that has access to the project.

Deploy or update it:

```bash
npm run deploy
```

After schema or Studio changes, run `npm run deploy` again. In [Sanity manage](https://sanity.io/manage) you can invite editors by email under **Members**.
