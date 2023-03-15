/**
 * @fileoverview Some nifty Next.js ESLint rules
 * @author Rizese
 */
"use strict";

const requireIndex = require("requireindex");

// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");

module.exports = {
  rules: {
    "no-get-server-side-props": require("./rules/no-get-server-side-props"),
  },
};
