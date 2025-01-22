# Mentalic Website

The official website for Mentalic Group Ltd, built with modern web technologies. Visit us at [mentalic.ltd](https://mentalic.ltd).

## Status

[![Deploy to GitHub Pages](https://github.com/cbarlgit/mentalic-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/cbarlgit/mentalic-website/actions/workflows/deploy.yml)

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages
- **Icons**: Lucide Icons
- **Font**: Geist

## Development

```bash
# Clone the repository
git clone https://github.com/cbarlgit/mentalic-website.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the result.

## Features

- 🌓 Dark mode support
- 🎨 Modern, minimalist design
- 📱 Fully responsive
- ⚡️ Fast page loads
- 🔄 Smooth animations
- 🌐 Custom domain with SSL

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── app/         # App router pages
│   └── components/  # React components
│       └── ui/      # Reusable UI components
```

## License

Copyright (c) 2024 Mentalic Group Ltd. All rights reserved.

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

Visit the live site at: https://cbarlgit.github.io/mentalic-website/

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
