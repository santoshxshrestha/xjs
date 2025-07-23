import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    // JavaScript recommended rules
    js.configs.recommended,

    // React plugin recommended config
    {
        ...reactPlugin.configs.flat.recommended,
        settings: {
            react: {
                version: "detect",
            },
        },
    },

    // React JSX runtime config
    {
        ...reactPlugin.configs.flat["jsx-runtime"],
    },

    // Custom overrides for JS/JSX files
    {
        files: ["**/*.js", "**/*.jsx"],
        languageOptions: {
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            "react/no-unescaped-entities": "off",
            "react/prop-types": "off",
        },
    },

    // Prettier config (must be last to disable conflicting rules)
    {
        name: "prettier",
        ...prettier,
    },
];
