/**
 * @fileoverview Disallow usage of `getServerSideProps` method in a given list of files to enforce static rendering
 * @author Rizese
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Disallow usage of `getServerSideProps` method in a given list of files to enforce static rendering",
      recommended: true,
      category: "Possible Errors"
    },
    schema: [
      {
        type: "array",
        items: {
          type: "string",
        },
      },
    ],  
  },
  create(context) {
    return {
      MethodDefinition(node) {
        const [forbiddenFiles = []] = context.options;
        const currentFile = context.getFilename();
        const isForbiddenFile = forbiddenFiles.includes(currentFile);
        if (node.key.name === "getServerSideProps" && isForbiddenFile) {
          context.report({
            node: node,
            message:
              `The file ${currentFile} is configured to be statically built. Usage of \`getServerSideProps\` method is not allowed in this file.`,
          });
        }
      },
    };
  },
};
