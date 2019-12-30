import { RuleTester } from "eslint"

import rule from "./no-jsx-button"

const tester = new RuleTester({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    }
  }
})

tester.run("no-jsx-button", rule, {
  valid: [
    {
      code: `(props: props) => <div />`,
    },
  ],
  invalid: [
    {
      code: `(props: props) => <button />`,
      errors: [{ message: "Don't use <button>" }]
    }
  ]
})