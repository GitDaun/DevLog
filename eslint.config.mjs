import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import vitestPlugin from "eslint-plugin-vitest";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

   // 테스트 관련 플러그인
   ...compat.extends(
    "plugin:testing-library/react",
    "plugin:vitest/recommended",
    "plugin:jest-dom/recommended"
  ),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-unused-vars": "warn",
      "vitest/expect-expect": "off",
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "19.0", // React 19 버전으로 업데이트
      },
    },
    languageOptions: {
      globals: {
        ...vitestPlugin.environments.env.globals,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
];

export default eslintConfig;
