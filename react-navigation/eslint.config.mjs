import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import pluginReactNative from 'eslint-plugin-react-native'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
      react: pluginReact,
      'react-native': pluginReactNative,
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReactNative.configs.all.rules,
      'react-native/no-inline-styles': 'warn',
      'react-native/no-color-literals': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  tseslint.configs.recommended,
])
