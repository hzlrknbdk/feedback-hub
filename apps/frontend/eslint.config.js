import { nextJsConfig } from "@repo/eslint-config/next-js";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

/** @type {import("eslint").Linter.Config} */
export default [
  ...nextJsConfig,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "warn",
    },
  },
];
