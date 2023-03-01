/**
 * @fileoverview Enforce static rendering in a given list of files by disallowing the getServerSideProps method
 * @author Rizese
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-get-server-side-props"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-get-server-side-props", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "export getServerSideProps = someMethod();",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
