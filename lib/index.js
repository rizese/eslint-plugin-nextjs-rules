/**
 * @fileoverview Some nifty Next.js ESLint rules
 * @author Rizese
 */
"use strict";

// const requireIndex = require("requireindex");

// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");

module.exports = {
  rules: {
    "no-get-server-side-props": require("./rules/no-get-server-side-props"),
    "no-foobar": {
      meta: {
        type: "suggestion",
        docs: {
          description: 'disallow "foobar" string in code',
          category: "Best Practices",
          recommended: true,
        },
      },
      create: function (context) {
        return {
          Literal(node) {
            if (
              typeof node.value === "string" &&
              node.value.includes("foobar")
            ) {
              context.report({
                node: node,
                message: 'Avoid using "foobar" in your code',
              });
            }
          },
        };
      },
    },
  },
};
