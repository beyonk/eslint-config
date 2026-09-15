<a href="https://beyonk.com">
    <br />
    <br />
    <img src="https://user-images.githubusercontent.com/218949/144224348-1b3a20d5-d68e-4a7a-b6ac-6946f19f4a86.png" width="198" />
    <br />
    <br />
</a>

## ESLint configuration

Beyonk ESLint rules

## Usage

Installation:

```bash
pnpm i --save-dev eslint @beyonk/eslint-config
```

Create an eslint.config.mjs file in the root directory of your project, or monorepo.

If you want specific rules for a project within the monorepo, create this file there, too, and customise it as required.

Config files don't inherit from their parents.

```js
import recommended from '@beyonk/eslint-config/recommended'

export default [
  ...recommended
]
```

### Configs

There are multiple config types within the project that you can use. Look in `package.json/exports` for a comprehensive list:

Svelte projects use `@beyonk/eslint-config/svelte` instead of `/recommended`. It's a function - pass it your own `svelte.config.js` (imported as a plain module) so the parser can pick up your Svelte compiler options:

```js
import svelte from '@beyonk/eslint-config/svelte'
import svelteConfig from './svelte.config.js'

export default [
  ...svelte(svelteConfig)
]
```

For TypeScript apps, use `@beyonk/eslint-config/typescript` instead of `/recommended` - it wraps `neostandard({ ts: true })` with the same house rules:

```js
import typescript from '@beyonk/eslint-config/typescript'

export default [
  ...typescript
]
```

For Svelte apps written in TypeScript, use `@beyonk/eslint-config/svelte-typescript` - also a function, same as `/svelte`:

```js
import svelteTypescript from '@beyonk/eslint-config/svelte-typescript'
import svelteConfig from './svelte.config.js'

export default [
  ...svelteTypescript(svelteConfig)
]
```

## Releasing

To release a new version, check out the code on your local machine, then:

```bash
pnpm version minor
git push && git push --tags
```

Where `minor` is a sensible default for rule changes which will impact existing projects.
