import neostandard, { plugins } from 'neostandard'
import { error, always, off } from './constants.js'

/** @param {{ ts?: boolean }} [options] @returns {import('eslint').Linter.Config[]} */
export default function base ({ ts = false } = {}) {
  return [
    ...neostandard({ ts }),
    plugins.promise.configs['flat/recommended'],
    {
      rules: {
        '@stylistic/array-bracket-spacing': [ error, always, { objectsInArrays: true, arraysInArrays: true } ],
        'promise/always-return': off,
        curly: error
      }
    }
  ]
}
