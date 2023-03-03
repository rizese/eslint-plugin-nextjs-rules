// no-get-server-side-props.spec.js
const { RuleTester } = require('eslint');
const noGetServerSideProps = require('../../../lib/rules/no-get-server-side-props.js');
const ruleTester = new RuleTester();
ruleTester.run('no-get-server-side-props', noGetServerSideProps, {
    valid: [{
        code: 'coolData = someMethod();',
    }],
    invalid: [{
        code: 'getServerSideProps = someMethod();',
        // we can use messageId from the rule object
        errors: [{ messageId: 'emptyCatch' }],
    }]
});