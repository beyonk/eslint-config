import recommended from './default.js'
import buildSvelteConfig from './svelte.js'
import ts from 'typescript-eslint'
import svelteParser from 'svelte-eslint-parser'
import { off } from './constants.js'

/**
 * @param {object} svelteConfig - the project's own svelte.config.js, imported and passed in by the consumer
 * @returns {import('eslint').Linter.Config[]}
 */
export default function buildSvelteTypescriptConfig (svelteConfig) {
  return [
    ...recommended,
    ...buildSvelteConfig(svelteConfig),
    ...ts.configs.recommended,
    {
      rules: {
        'no-undef': off
      }
    },
    {
      files: [ '**/*.svelte' ],
      languageOptions: {
        parser: svelteParser,
        parserOptions: {
          parser: ts.parser,
          extraFileExtensions: [ '.svelte' ],
          svelteConfig
        }
      }
    },
    {
      files: [ '**/*.svelte.ts', '**/*.svelte.js' ],
      languageOptions: {
        parser: ts.parser
      }
    }
  ]
}
