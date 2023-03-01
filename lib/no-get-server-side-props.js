const forbiddenFiles = require("./forbidden-files");

module.exports = {
  rules: {
    "no-get-server-side-props": {
      meta: {
        type: "problem",
        docs: {
          description:
            "Disallow usage of `getServerSideProps` method in a given list of files. This is used primarily to enforce static rendering.",
          category: "Possible Errors",
          recommended: true,
        },
      },
      create: function (context) {
        return {
          MethodDefinition(node) {
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
    },
  },
};
