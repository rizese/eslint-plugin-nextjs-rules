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
    // "no-get-server-side-props": require("./rules/no-get-server-side-props"),
    "no-get-server-side-props": {
      meta: {
        type: "problem",
        docs: {
          description:
            "Disallow usage of `getServerSideProps` method in a file to enforce static rendering",
          category: "Performance",
          recommended: true,
        },
      },
      create: function (context) {
        const files = context.options[0].files || [];
        const currentFile = context.getFilename();
        const fileIsConfigured = files.includes(currentFile);
        return {
          Literal(node) {
            if (
              typeof node.value === "string" &&
              node.value.includes("getServerSideProps") &&
              fileIsConfigured
            ) {
              context.report({
                node: node,
                message: `The file ${currentFile} is configured to be statically built. Usage of \`getServerSideProps\` method is not allowed in this file.`,
              });
            }
          },
        };
      },
    },
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
