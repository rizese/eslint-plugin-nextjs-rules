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
        const fileIsConfigured = files.length
          ? files.includes(currentFile)
          : false;
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
    "no-long-strings": {
      meta: {
        type: "suggestion",
        docs: {
          description: "disallow long strings in code",
          category: "Best Practices",
          recommended: true,
        },
        schema: [
          {
            type: "object",
            properties: {
              maxLength: {
                type: "number",
                minimum: 0,
              },
            },
            additionalProperties: false,
          },
        ],
      },
      create: function (context) {
        const maxLength = context.options[0].maxLength || 80;
        return {
          Literal(node) {
            if (
              typeof node.value === "string" &&
              node.value.length > maxLength
            ) {
              context.report({
                node: node,
                message: "Avoid using long strings in your code",
              });
            }
          },
        };
      },
    },
  },
};
