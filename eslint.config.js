import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
// import importPlugin from "eslint-plugin-import";
// import simpleImportSort from "eslint-plugin-simple-import-sort";
// import unusedImports from "eslint-plugin-unused-imports";
// import sonarjs from "eslint-plugin-sonarjs";
// import security from "eslint-plugin-security";
import prettier from 'eslint-plugin-prettier';

export default [
  // ✅ Ignore config files first
  {
    ignores: ['dist', 'node_modules', 'eslint.config.js'],
  },

  // Base JS rules
  js.configs.recommended,

  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // -----------------------------
  // ✅ TypeScript ONLY (important)
  // -----------------------------
  {
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      prettier,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',

      // "sonarjs/cognitive-complexity": ["error", 15],
      // "sonarjs/no-duplicate-string": "error",
      // "sonarjs/no-identical-functions": "error",

      // "security/detect-object-injection": "off",
      // "security/detect-non-literal-fs-filename": "error",

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/self-closing-comp': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-boolean-value': ['error', 'never'],

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'error',

      // "simple-import-sort/imports": "error",
      // "simple-import-sort/exports": "error",
      // "import/no-duplicates": "error",

      // "unused-imports/no-unused-imports": "error",
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',

      'prettier/prettier': 'error',
    },
  },
];
