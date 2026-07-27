import { fixupPluginRules } from '@eslint/compat';
import eslintJS from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImport from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";

const patchedReactHooksPlugin = fixupPluginRules(eslintPluginReactHooks);
const patchedImportPlugin = fixupPluginRules(eslintPluginImport);

const baseESLintConfig = {
  name: "eslint",
  extends: [
    eslintJS.configs.recommended,
  ],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      ...globals.builtin,
      ...globals.browser,
      ...globals.es2025
    }
  },
  rules: {
    "no-await-in-loop": "error",
    "no-constant-binary-expression": "error",
    "no-duplicate-imports": "error",
    "no-new-native-nonconstructor": "error",
    "no-promise-executor-return": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable-loop": "error",
    "no-unused-private-class-members": "error",
    "require-atomic-updates": "error",
    "camelcase": "warn",
  }
};

const reactConfig = {
  name: "react",
  extends: [
    eslintPluginReact.configs.flat["jsx-runtime"],
  ],
  plugins: {
    "react-hooks": patchedReactHooksPlugin,
    "react-refresh": eslintPluginReactRefresh,
    import: patchedImportPlugin,
  },
  rules: {
    "import/no-anonymous-default-export": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-filename-extension": [
      2,
      { extensions: ['.js', '.jsx'] }
    ],
    "react/jsx-no-target-blank": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: true,
        multiline: "last",
      },
    ],
    "react/no-unknown-property": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "error",
    ...patchedReactHooksPlugin.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { "allowConstantExport": true }
    ],
  },
};

const jsxA11yConfig = {
  name: "jsxA11y",
  ...jsxA11yPlugin.flatConfigs.recommended,
  plugins: {
    "jsx-a11y": jsxA11yPlugin,
  },
  rules: {
    "jsx-a11y/alt-text": [
      "error",
      { elements: ["img"], img: ["Image"] },
    ],
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
  }
};

const unicornConfig = {
  name: "unicorn",
  plugins: {
    unicorn: eslintPluginUnicorn,
  },
  rules: {
    "unicorn/custom-error-definition": "error",
    "unicorn/empty-brace-spaces": "error",
    "unicorn/no-array-for-each": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/no-console-spaces": "error",
    "unicorn/no-null": "off",
    "unicorn/filename-case": "off",
  }
};

export default [
  {
    files: ["src/**/*.{js,jsx}"]
  },
  baseESLintConfig,
  eslintConfigPrettier,
  reactConfig,
  jsxA11yConfig,
  unicornConfig
];
