import { Rule } from "eslint";

const rule: Rule.RuleModule = {
  create: (context) => {
    return {
      Literal: (node) => {
        context.report({
          message: "☺️",
          node,
        })
      }
    }
  }
}

export = rule