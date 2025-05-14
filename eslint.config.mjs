import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unused vars
      "@typescript-eslint/no-unused-vars": "off",
      // Allow explicit any
      "@typescript-eslint/no-explicit-any": "off",
      // Permit unescaped entities
      "react/no-unescaped-entities": "off",
      // Silence Hooks dependency warnings
      "react-hooks/exhaustive-deps": "off",
      // Allow <img> elements
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
