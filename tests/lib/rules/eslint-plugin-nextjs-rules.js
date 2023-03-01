/**
 * @fileoverview Disallow usage of `getServerSideProps` method in a given list of files to enforce static rendering
 * @author Rizese
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/eslint-plugin-nextjs-rules"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("eslint-plugin-nextjs-rules", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "export getServerSideProps = createGetServerSideProps();",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
