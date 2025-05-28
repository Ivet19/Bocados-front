# 🍽️ Bocados

**Bocados** is a mobile-only, single-page CRUD application built with modern front-end technologies. It allows users to keep track of restaurants in **Barcelona** they’ve visited — or would like to visit — with rich details and a user-friendly interface.

---

## 🚀 Tech Stack

- ⚡️ [Vite](https://vitejs.dev/) – Fast build tool for modern web projects
- 🛠️ [TypeScript](https://www.typescriptlang.org/) – Typed JavaScript at scale
- ⚛️ [React](https://reactjs.org/) – Component-based UI
- 🔀 [React Router](https://reactrouter.com/) – Routing for SPAs
- 📦 [Redux Toolkit](https://redux-toolkit.js.org/) – State management made easy
- ✅ [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) – For testing UI behavior
- 🧪 [Vitest](https://vitest.dev/) – Vite-native test runner
- 🌐 [MSW (Mock Service Worker)](https://mswjs.io/) – API mocking for development and testing

---

## 📄 Features

- 🧾 **List of Restaurants** – See all saved restaurants
- 🧐 **Restaurant Details** – View full info: name, location, food type, description & image
- ➕ **Add Restaurant** – Save new places to visit
- ✏️ **Edit Restaurant** – Update any details
- ❌ **Delete Restaurant** – Remove entries
- ⭐ **Visited?** – Mark as visited, rate (0–10), and add visit date

---

## 🧭 Navigation

The app includes 4 main pages:

1. **Restaurant List** – All restaurants at a glance
2. **Restaurant Details** – Full info about a selected restaurant
3. **Add Restaurant** – Form to register a new one
4. **Edit Restaurant** – Form to modify existing entries

---

## 📱 Mobile-Only Experience

Bocados is designed **exclusively for mobile screens** to deliver a clean, intuitive, and responsive UX focused on handheld use cases.

---

## 🧪 Testing

This project includes a robust test setup:

- Unit & integration tests using **Vitest** and **React Testing Library**
- **Mock API** responses via **MSW** for realistic test environments

Run all tests with:

```bash
npm run test
```

---

## 🛠️ Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/Ivet19/Bocados-front.git
cd bocados
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

---

## 🌍 About

**Bocados** helps food lovers keep a curated list of Barcelona’s culinary spots — whether you’re reliving tasty memories or planning your next outing.

---

## ✨ Future Improvements

- ✅ Tagging or filtering by cuisine type or other characteristics
- 📍 Map integration for visual location
- 📸 Gallery view or image uploads
- 🔔 Reminder for unvisited saved spots

---

## 🧭 Project structure

```
Bocados-front/
├── .github/
│   └── workflows/           # CI/CD pipelines (e.g., testing, linting)
├── .husky/                  # Git hooks (pre-commit, commit-msg, pre-push)
├── public/                  # Static assets and the main HTML file
│   └── index.html
├── src/
│   ├── assets/              # Static assets like images and fonts
│   │   ├── images/
│   │   └── fonts/
│   ├── components/          # Reusable UI components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.test.tsx
│   │   └── ...
│   ├── features/            # Feature-specific components and logic
│   │   ├── restaurants/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── types.ts
│   │   └── ...
│   ├── pages/               # Page-level components
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── Home.test.tsx
│   │   └── ...
│   ├── routes/              # Application routing
│   │   └── AppRoutes.tsx
│   ├── services/            # API calls and external services
│   │   └── api.ts
│   ├── store/               # Global state management (e.g., Redux)
│   │   ├── index.ts
│   │   └── slices/
│   ├── styles/              # Global styles and theme
│   │   ├── variables.scss
│   │   └── global.scss
│   ├── utils/               # Utility functions and helpers
│   │   └── formatDate.ts
│   ├── App.tsx              # Root component
│   └── main.tsx             # Entry point
├── .editorconfig
├── .env.sample              # Sample environment variables
├── .gitignore
├── .lintstagedrc.json
├── commitlint.config.ts
├── eslint.config.js
├── jest.config.ts
├── package.json
├── package-lock.json
├── sonar-project.properties
├── tsconfig.json
└── vite.config.ts
```

---

## 📃 License

MIT © Ivet López Prados.
