# LensFlowPro Landing Page

A modern, responsive landing page for LensFlowPro - a professional photo editing mobile application. Built with Next.js and Tailwind CSS, optimized for Vercel deployment.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Built with Next.js 16 and React 19
- 🌙 Dark mode support
- 📱 Mobile-first responsive design
- 🚀 Optimized for Vercel deployment
- ♿ Accessibility-focused
- 🎯 Hero section with compelling CTAs
- 💰 Pricing section with multiple tiers
- ⭐ Customer testimonials
- 📊 Feature highlights
- 🔄 Smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (optimized)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for Vercel deployment:

### Automatic Deployment
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

### Manual Deployment
1. Build the project:
```bash
npm run build
```

2. Deploy the `out` folder to any static hosting service

## Project Structure

```
lensflowpro-landing/
├── src/
│   └── app/
│       ├── page.tsx          # Main landing page
│       ├── layout.tsx        # Root layout
│       └── globals.css       # Global styles
├── public/                   # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## Customization

### Branding
- Update the app name and logo in the navigation
- Modify colors in Tailwind configuration
- Update text content throughout the page

### Styling
- Colors are defined in Tailwind config
- Component styles use Tailwind utility classes
- Dark mode is fully supported

### Content
- All text content is in `src/app/page.tsx`
- Features, pricing, and testimonials can be easily updated
- Add new sections by following the existing patterns

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is licensed under the MIT License.
