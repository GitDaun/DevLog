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
   // 테스트 관련 플러그인
   ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:testing-library/react",   
    "plugin:jest-dom/recommended",    
    "plugin:vitest/recommended",  
  ),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-unused-vars": "warn",
      "vitest/expect-expect": "off",
      "react/prop-types": "on",
    },
    settings: {
      react: {
        version: "19.0", 
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
