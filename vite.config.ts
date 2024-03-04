import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  ssr: {},
  plugins: [
    solid({
      // ssr: true,
      solid: {
        omitNestedClosingTags: false,
        generate: "universal",
        hydratable: true,
      },
    }),
  ],
  build: {
    ssr: true,
    target: "esnext",
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
      name: "SolidPropsStyleSSR",
      fileName: "index",
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web", "@solidjs/meta"],
      output: {
        globals: {
          "solid-js": "solid-js",
          "solid-js/web": "solid-js/web",
          "@solidjs/meta": "@solidjs/meta",
        },
      },
      plugins: [
        typescript({
          rootDir: "./src",
          exclude: ["index.tsx", "pages/*.tsx"],
        }),
      ],
    },
  },
});
