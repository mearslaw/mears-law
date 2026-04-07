This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Webinar Payments (Stripe)

To enable paid webinar registration with confirmation emails, set these in `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_WEBINAR_PAYMENT_LINK=https://buy.stripe.com/eVq8wQ4qT3XGgVE5Mp2go02
NEXT_PUBLIC_WEBINAR_CHECKOUT_MODE=payment_link
WEBINAR_REGISTRATION_ACCESS_KEY=...
```

- `POST /api/webinars/register` creates a Stripe Checkout session.
- `POST /api/webinars/stripe-webhook` processes `checkout.session.completed` and sends confirmation email.
- If `STRIPE_SECRET_KEY` is not set, registration falls back to `STRIPE_WEBINAR_PAYMENT_LINK` and then redirects users to that Stripe payment link.
- `NEXT_PUBLIC_WEBINAR_CHECKOUT_MODE` controls frontend button/copy (`payment_link` or `checkout_session`). Default is `payment_link`.

For local webhook forwarding with Stripe CLI:

```bash
stripe listen --forward-to localhost:3000/api/webinars/stripe-webhook
```
