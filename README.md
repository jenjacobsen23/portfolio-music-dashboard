# Portfolio Dashboard

A modern, responsive portfolio dashboard built with Next.js 15, TypeScript, and Tailwind CSS. This application provides a beautiful and interactive way to showcase your portfolio with real-time data integration.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Beautiful UI**: Utilizes Shadcn UI components and Radix UI primitives
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Dark Mode**: Built-in dark mode support with next-themes
- **Authentication**: Secure authentication with NextAuth.js
- **Data Visualization**: Interactive charts and graphs with Recharts
- **Spotify Integration**: Real-time Spotify data display
- **Performance Optimized**: Server-side rendering and optimized assets

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI, Radix UI
- **Authentication**: NextAuth.js
- **Data Visualization**: Recharts
- **State Management**: React Hooks
- **API Integration**: Spotify Web API

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-dashboard.git
cd portfolio-dashboard
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory with the following variables:

```env
# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Spotify API
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
portfolio-dashboard/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── lib/                 # Utility functions and configurations
├── public/              # Static assets
├── types/               # TypeScript type definitions
└── styles/              # Global styles and Tailwind config
```

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/portfolio-dashboard](https://github.com/yourusername/portfolio-dashboard)
