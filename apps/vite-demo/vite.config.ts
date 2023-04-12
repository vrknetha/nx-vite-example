/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import istanbul from 'vite-plugin-istanbul';
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  cacheDir: "../../node_modules/.vite/vite-demo",

  server: {
    port: 4200,
    host: "localhost",
  },

  preview: {
    port: 4300,
    host: "localhost",
  },

  plugins: [
    react(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'test/'],
      extension: [ '.js', '.ts', '.vue' ],
      requireEnv: true,
    }),
    viteTsConfigPaths({
      root: "../../",
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: "../../node_modules/.vitest",
    },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
