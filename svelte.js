import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import { off } from './constants.js'

/**
 * @param {object} svelteConfig - the project's own svelte.config.js, imported and passed in by the consumer
 * @returns {import('eslint').Linter.Config[]}
 */
export default function buildSvelteConfig (svelteConfig) {
  return [
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
          svelteConfig
        }
      },
      rules: {
        'svelte/require-each-key': off,
        'svelte/no-at-html-tags': off,
      }
    },
    {
      files: [ '**/*.svelte', '**/*.js' ],
      languageOptions: {
        parserOptions: {
          svelteConfig
        }
      },
      rules: {
        'svelte/no-navigation-without-resolve': off
      }
    }
  ]
}
