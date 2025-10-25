/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "next/typescript", "eslint:recommended", "eslint-config-prettier"],
  parserOptions: {
    project: "./tsconfig.json"
  },
  env: {
    browser: true,
    node: true,
    es2023: true
  },
  settings: {
    next: {
      rootDir: ["./"]
    }
  },
  overrides: [
    {
      files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
      globals: {
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        vi: "readonly"
      }
    }
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off"
  }
};
