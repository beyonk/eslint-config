import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import { off } from './constants.js'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...svelte.configs.recommended,
  {
    ignores: [
      '**/.svelte-kit/',
      '**/static/'
    ]
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: [ '**/*.svelte', '**/*.svelte.js' ],
    languageOptions: {
      parserOptions: {
        svelteConfig: readFileSync(join(process.cwd(), 'svelte.config.js'), 'utf8')
      }
    },
    rules: {
      'svelte/require-each-key': off,
      'svelte/no-at-html-tags': off,
    }
  },
  {
    files: [ '**/*.svelte', '**/*.svelte.js', '**/+{layout,page}.js', '**/+{layout,page}.server.js' ],
    languageOptions: {
      parserOptions: {
        svelteConfig: readFileSync(join(process.cwd(), 'svelte.config.js'), 'utf8')
      }
    },
    rules: {
      'svelte/no-navigation-without-resolve': off
    }
  }
]
