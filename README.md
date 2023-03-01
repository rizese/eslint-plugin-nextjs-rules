# eslint-plugin-nextjs-rules

Some nifty Next.js ESLint rules

# Rules

### `no-get-server-side-props`

PEnforce static page generation on Next.js applications by disabling usage of [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) among a given set of files.

Example usage

```
/** .eslintrc **/
module.exports = {
  plugins: ["eslint-plugin-nextjs-rules", ...],
  rules: {
    "eslint-plugin-nextjs-rules/no-get-server-side-props": ["error", ["src/pages/index.tsx"]]
/***                                                                   ^^^^^ array of files to disallow usage of getServerSideProps
    ...
  }
}
```
