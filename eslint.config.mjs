import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import vitestPlugin from "eslint-plugin-vitest";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: false
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:testing-library/react",   
    "plugin:jest-dom/recommended"
  ),

  {
    files: ["src/app/**/*.{js,jsx,ts,tsx}"],
    ignores: ["**/*.css", "**/*.ico", "**/*.json", "**/*.svg", "**/*.test.*", "**/__mocks__/**"],
    plugins: {
      vitest: vitestPlugin
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "import/no-unresolved": "off",
      "react/prop-types": "off"
    },
    settings: {
      react: {
        version: "19.0"
      },
      "import/resolver": {
        typescript: {}
      }
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    }
  },

  {
    files: ["**/*.test.{js,jsx,ts,tsx}", "**/__mocks__/**/*.{js,jsx,ts,tsx}"],
    ...vitestPlugin.configs.recommended,
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "testing-library/no-render-in-lifecycle": "off",
      "testing-library/no-node-access": "off",
      "jest-dom/prefer-to-have-class": "off",
      "import/no-anonymous-default-export": "off",
      "import/no-unresolved": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@next/next/no-img-element": "off",
      "jsx-a11y/alt-text": "off"
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json"
        }
      }
    }
  }
];

export default eslintConfig;
