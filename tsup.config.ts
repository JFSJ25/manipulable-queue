import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: {
    resolve: true
  },
  sourcemap: false,
  clean: true,
  outDir: "dist"
})
