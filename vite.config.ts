import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    reporters: [`verbose`],
    environment: "jsdom",
    setupFiles: ["src/setupTests.ts"],
    coverage: {
      reportsDirectory: "./coverage",
      exclude: ["src/main.tsx", "**/*.d.ts", "**/*.config.*"],
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      include: ["**/*.ts", "**/*.tsx"],
    },
  },
  plugins: [react()],
});
