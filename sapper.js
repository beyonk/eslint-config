import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import { warn, off } from './constants.js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...svelte.configs.recommended,
  {
    ignores: [
      '**/__sapper__/',
      '.vercel/'
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
    files: [ '**/*.svelte', '**/*.html' ],
    rules: {
      'svelte/require-each-key': warn,
      'svelte/no-at-html-tags': off,
      'svelte/prefer-svelte-reactivity': off
    },
    ignores: [
      '**/template.html'
    ]
  }
]
