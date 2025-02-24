/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const enableCompiler = false;

const babelConfig = enableCompiler
  ? { babel: { plugins: ["babel-plugin-react-compiler", {}] } }
  : undefined;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(babelConfig)],
  server: {
    port: 3000
  },
  test: {
    environment: "jsdom",

    setupFiles: ["./vitest-setup.ts"],
    restoreMocks: true
  }
});
