# eslint-plugin-nextjs-rules

Some nifty Next.js ESLint rules

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-nextjs-rules`:

```sh
npm install eslint-plugin-nextjs-rules --save-dev
```

## Usage

Add `nextjs-rules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "nextjs-rules"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "nextjs-rules/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                                               | Description                                                                                        |
| :----------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| [no-get-server-side-props](docs/rules/no-get-server-side-props.md) | Disallow usage of `getServerSideProps` method in a given list of files to enforce static rendering |

<!-- end auto-generated rules list -->


