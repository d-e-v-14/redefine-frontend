![ieeecs-template-header](https://github.com/user-attachments/assets/c3c40c85-51a2-4a5e-82a4-c32a0223e336)

<h1 align="center">Redefine</h1>

<h4 align="center">A Next.js frontend application built with TypeScript and Tailwind CSS.</h4>

---

## Overview

Redefine is a frontend application built with Next.js and TypeScript, designed to provide a modern, type-safe web interface. The project leverages Tailwind CSS for styling and follows a modular architecture for scalability.

---

## Architecture Overview

The application follows the Next.js App Router architecture with a `src/` directory layout:

- **App Directory** (`src/app/`) - Next.js App Router with server and client components
- **Components** (`src/components/`) - Reusable UI components
- **Hooks** (`src/hooks/`) - Custom React hooks
- **Services** (`src/services/`) - API calls and external integrations
- **Utils** (`src/utils/`) - Utility and helper functions
- **Lib** (`src/lib/`) - Core library code and configuration
- **Types** (`src/types/`) - TypeScript type definitions
- **Tailwind CSS** - Utility-first CSS framework for all styling

---

## Tech Stack

| Layer        | Technology Used                              |
|-------------|----------------------------------------------|
| Frontend    | Next.js 15, React 19, TypeScript 5           |
| Styling     | Tailwind CSS 3                               |
| Linting     | ESLint, eslint-config-next                   |
| CI/CD       | GitHub Actions                               |

---

## Project Structure

```
redefine-frontend/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── services/
│   ├── types/
│   └── utils/
├── public/
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── package.json
└── .env.example
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/IEEECS-VIT/redefine-frontend.git
cd redefine-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and define the required variables.

Refer to `.env.example` for the list of required keys.

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

| Command              | Description                          |
|---------------------|--------------------------------------|
| `npm run dev`       | Start the development server         |
| `npm run build`     | Create a production build            |
| `npm run start`     | Start the production server          |
| `npm run lint`      | Run ESLint checks                    |
| `npm run typecheck` | Run TypeScript type checking         |

---

## Git Hooks Setup

This repository uses custom Git hooks to enforce commit standards and branch discipline.

After cloning the repository, run the following command once:

```bash
git config core.hooksPath .githooks
```

This enables:
- Commit message validation (conventional commits: `feat|fix|chore|docs|refactor|test`)
- Blocking direct pushes to `main`

---

## Environment Variables

| Variable Name        | Description                          |
|---------------------|--------------------------------------|
| NEXT_PUBLIC_APP_URL  | Application base URL                 |
| NODE_ENV             | Environment mode (development/production) |
| NEXT_PUBLIC_API_URL  | Backend API endpoint URL             |

---

## Deployment

This Next.js application can be deployed to any platform that supports Node.js:

- **Vercel** (recommended) - Zero-config deployment with Git integration
- **Docker** - Containerized deployment
- **Node.js hosting** - Any VPS or cloud provider

### Build for Production

```bash
npm run build
npm run start
```

---

## Testing

```bash
npm test
```

---

## Project Status

- 🟢 In Development
