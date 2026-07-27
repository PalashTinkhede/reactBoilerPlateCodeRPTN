# Vite + React Boilerplate

A modern, production-ready starter template for **Vite** and **React** applications using **npm** and **JavaScript (JSX)**.
hi
## Table of Contents

- [Overview](#overview)
- [Tech Stack & Features](#tech-stack--features)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Project Structure](#project-structure)

---

## Overview

This project is a clean, batteries-included template for building scalable React web applications.

---

## Tech Stack & Features

- **Package Manager**: [npm](https://www.npmjs.com/)
- **Core UI**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) (with JavaScript / JSX)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7 (`react-router-dom`)](https://reactrouter.com/)
- **State Management**:
  - Global State: [Redux Toolkit](https://redux-toolkit.js.org/) (`@reduxjs/toolkit` & `react-redux`)
  - Server State & Caching: [TanStack Query](https://tanstack.com/query) (`@tanstack/react-query`)
- **Internationalization (i18n)**: [i18next](https://www.i18next.com/) + `react-i18next` (Multi-language support ready)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Data Table**: [TanStack Table](https://tanstack.com/table)
- **Data Visualization**: [Nivo Charts](https://nivo.rocks/) (`@nivo/bar`, `@nivo/pie`, `@nivo/line`)
- **Testing**:
  - Unit & Integration: [Vitest](https://vitest.dev/) + React Testing Library
  - End-to-End (E2E): [Playwright](https://playwright.dev/)
- **Code Quality & Formatting**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (installed with Node.js)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`.

---

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Bundles the app for production in the `dist` folder.
- `npm run preview`: Locally previews the production build.
- `npm run test`: Runs both Vitest unit tests and Playwright E2E tests.
- `npm run test:unit`: Runs Vitest unit tests.
- `npm run test:unit:coverage`: Runs Vitest with coverage report.
- `npm run test:e2e`: Runs Playwright E2E tests.
- `npm run test:e2e:report`: Opens the Playwright HTML test report.
- `npm run lint`: Checks for code linting errors using ESLint.
- `npm run lint:fix`: Automatically fixes fixable ESLint errors.
- `npm run format`: Formats source files using Prettier.

---

## Project Structure

```text
├── public/                 # Static assets & public locale files
├── src/
│   ├── assets/             # Images, translations JSON, and media assets
│   ├── common/             # Common utilities & i18n initialization
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page view components (e.g., Home.jsx)
│   ├── store/              # Redux Toolkit store & slices
│   ├── styles/             # Global styles & Tailwind import
│   ├── App.jsx             # Main application component with Router & Providers
│   └── main.jsx            # Application entry point
├── e2e/                    # Playwright end-to-end tests
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
└── package.json            # Project dependencies and scripts
```
