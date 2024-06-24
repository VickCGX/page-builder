import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pageBuilder",
      filename: "remoteEntry.js",
      exposes: {
        "./WrapperApp": "./src/App.tsx",
        "./useSharedImage": "./src/atoms/ShareImage.ts",
      },
      shared: ["tldraw", "react", "react-dom", "jotai"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
