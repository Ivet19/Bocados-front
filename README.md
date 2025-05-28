![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux--Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![MSW](https://img.shields.io/badge/MSW-F56A6A?style=for-the-badge)

# 🍽️ Bocados

**Bocados** is a mobile-only, single-page CRUD application built with modern front-end technologies. It allows users to keep track of restaurants in **Barcelona** they’ve visited — or would like to visit — with rich details and a user-friendly interface.

---

## 🌐 Deployment

This project is hosted on **Netlify** with continuous deployment from the `main` branch.

🔗 [Live Demo](https://bocados.netlify.app/)

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

1. **Restaurant List** – All restaurants at a glance (`/`)
2. **Restaurant Details** – Full info about a selected restaurant (`/:restaurantId`)
3. **Add Restaurant** – Form to register a new one (`/add-restaurant`)
4. **Edit Restaurant** – Form to modify existing entries (`/modify-restaurant/:restaurantId`)

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
├── .github/                    # GitHub Actions workflows (CI/CD)
│   └── workflows/
│       ├── audit.yml
│       ├── sonar.yml
│       └── testing.yml
├── .husky/                     # Git hooks
├── public/                     # Static assets and meta files
│   ├── _redirects
│   ├── favicon.svg
│   ├── robots.txt
│   ├── icons/                  # All SVG icons
│   └── images/                 # Static image files (e.g., logo, loading)
├── src/
│   ├── main.tsx                # App entry point
│   ├── styles/                 # Global styles (e.g., styles.css)
│
│   ├── router/                 # Routing configuration
│   │   ├── AppRouter/
│   │   ├── AppTestRouter/
│   │   └── LazyPages/
│
│   ├── store/                  # Redux store setup & hooks
│   │   ├── store.ts
│   │   ├── setUpStore.ts
│   │   └── hooks.ts
│
│   ├── restaurant/             # Feature domain: Restaurants
│   │   ├── client/             # API calls and types
│   │   ├── components/         # Reusable components for restaurant views
│   │   ├── dto/                # DTOs, mappers, and type transformations
│   │   ├── fixtures.ts         # Mock data
│   │   ├── hooks/              # Feature-specific hooks
│   │   ├── mocks/              # MSW handlers (testing)
│   │   ├── pages/              # Page-level components for routes
│   │   ├── slice/              # Redux slice for restaurants
│   │   └── types.ts            # Core feature types
│
│   ├── ui/                     # UI-specific shared components and state
│   │   ├── components/         # Atomic/shared UI elements (Button, Modal, etc.)
│   │   ├── hooks/              # UI-layer hooks (modal, loading)
│   │   ├── pages/              # UI-specific pages (e.g., NotFound)
│   │   └── uiSlice/            # Redux slice for UI state
│
│   └── setupTests.ts           # Global test setup
│
├── .editorconfig
├── .env.sample
├── .gitignore
├── .lintstagedrc.json
├── README.md
├── commitlint.config.ts
├── eslint.config.js
├── index.html                  # Vite template entry
├── package.json
├── package-lock.json
├── sonar-project.properties
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

---

## 📃 License

MIT © Ivet López Prados.
