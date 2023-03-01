# Disallow usage of `getServerSideProps` method in a given list of files to enforce static rendering (`nextjs-rules/no-get-server-side-props`)

<!-- end auto-generated rule header -->

Please describe the origin of the rule here.

## Rule Details

This rule aims to enforce static page generation on Next.js projects by disallowing `getServerSideProps`

Examples of **failing** code for this rule:

```js
// using getServerSideProps disables static rendering in Next.js
export getServerSideProps = someFunction();
```

### Options

This rule takes an array of strings for files that should be statically rendered.
Note that this rule does not guarantee that a page _will_ be statically rendered by Next.js. But offers a simple protection again usage of `getServerSideProps` which, if used, will definitely _not_ statically render a page.
It's expected that files passed to this rule are from the `~/pages` or `~/app` directories, and thus pages, but no check is in place for this.

## Further Reading

Next.js Docs:

- https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
- https://nextjs.org/docs/advanced-features/automatic-static-optimization
