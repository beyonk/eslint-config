import vitest from '@vitest/eslint-plugin'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: [ '**/**.spec.js' ],
    plugins: {
      vitest
    },
    rules: {
      ...vitest.configs.recommended.rules
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals
      }
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
]
