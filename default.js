import neostandard, { plugins } from 'neostandard'
import { error, always, off } from './constants.js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...neostandard(),
  plugins.promise.configs['flat/recommended'],
  {
    rules: {
      '@stylistic/array-bracket-spacing': [ error, always, { objectsInArrays: true, arraysInArrays: true } ],
      'promise/always-return': off,
      curly: error
    }
  }
]
