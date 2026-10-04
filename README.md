# Portfolio

Freelance portfolio site: services, live projects, process, pricing, FAQ and contact.

Built with Next.js, TypeScript and Tailwind CSS. Fully static.

## Editing content

Everything on the page comes from [`src/content/site.ts`](src/content/site.ts): name, headline, contact links
(empty values are hidden), services and prices, projects, process steps and FAQs.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Import the repo in Vercel; no environment variables are needed.
