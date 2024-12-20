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

Create .env.local with the following key-value pairs:
TWITTER_API_KEY
TWITTER_API_SECRET_KEY
TWITTER_ACCESS_TOKEN
TWITTER_ACCESS_SECRET
TWITTER_CLIENT_ID
TWITTER_CLIENT_SECRET
OPENAI_API_KEY

For twitter, use the user specific acess token/secret with read/write permissions (this require sewtting up the consent window for read/write and re-generating tokens after that)