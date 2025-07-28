import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactNative from "eslint-plugin-react-native";

export default tseslint.config({
  // Проверять только TS-файлы
  files: ["**/*.{ts,tsx}"],
  ignores: ["node_modules", "android", "ios", "build", "dist"],

  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      project: "./tsconfig.json", // опционально, если нужен type-aware lint
    },
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },

  plugins: {
    react: pluginReact,
    "react-native": pluginReactNative,
  },

  rules: {
    // React
    ...pluginReact.configs.recommended.rules,
    "react/react-in-jsx-scope": "off", // не нужен в новых React
    "react/jsx-uses-react": "off",

    // React Native
    ...pluginReactNative.configs.all.rules,
    "react-native/no-inline-styles": "warn",
    "react-native/no-color-literals": "off",
  },

  settings: {
    react: {
      version: "detect",
    },
  },
});
