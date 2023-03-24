/**
 * @fileoverview Some nifty Next.js ESLint rules
 * @author Rizese
 */
"use strict";

module.exports = {
  rules: {
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
        const files =
          ((context.options && context.options[0]) || {}).files || [];
        const currentFile = context.getFilename();
        const basepath = __dirname.split("node_modules")[0];
        const fileIsConfigured = files.length
          ? files.some(
              (file) => basepath + file.replace(basepath, "") === currentFile
            )
          : false;
        const message = `The file ${currentFile} is configured to be statically built. Usage of \`getServerSideProps\` method is not allowed in this file.`;

        return fileIsConfigured
          ? {
              Literal(node) {
                if (
                  typeof node.value === "string" &&
                  node.value.includes("getServerSideProps")
                ) {
                  context.report({
                    node: node,
                    message: message,
                  });
                }
              },
              VariableDeclarator(node) {
                if (node.id.name === "getServerSideProps") {
                  context.report({
                    node,
                    message: message,
                  });
                }
              },
              FunctionDeclaration(node) {
                if (node.id.name === "getServerSideProps") {
                  context.report({
                    node,
                    message: message,
                  });
                }
              },
              FunctionExpression(node) {
                if (node.id && node.id.name === "getServerSideProps") {
                  context.report({
                    node,
                    message: message,
                  });
                }
              },
            }
          : {};
      },
    },
  },
};
