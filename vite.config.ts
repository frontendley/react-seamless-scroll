import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    host: "0.0.0.0"
  },
  build: {
    outDir: "lib",
    cssTarget: "chorme61",
    lib: {
      entry: "./components/index.tsx",
      name: "reactSeamlessComponent",
      fileName: "index",
      formats: ["es" , "cjs" , "umd", "iife"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    }
  }
})
