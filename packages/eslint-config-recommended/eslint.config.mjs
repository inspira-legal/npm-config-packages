// @ts-check

import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import cspellConfigs from '@cspell/eslint-plugin/configs'

export default [
  eslint.configs.recommended,
  cspellConfigs.recommended,
  eslintConfigPrettier,
  {
    /** @type {import('eslint').Linter.RulesRecord} */
    rules: {
      'no-useless-constructor': 'off',
      'no-underscore-dangle': 'off',
      'multiline-ternary': 'off',
      'no-use-before-define': 'off',
      'space-before-function-paren': 'off',
      'dot-notation': 'off',
      // Waiting to migrate plugins when upgrade available:
      // eslint-plugin-import, eslint-plugin-no-relative-import-paths
      // 'import/named': 'off',
      // 'import/prefer-default-export': 'off',
      // 'import/no-named-as-default': 'off',
      // 'import/no-named-as-default-member': 'off',
      // 'import/no-relative-packages': 'error',
      // 'import/no-relative-parent-imports': 'error',
      // 'import/order': [
      //   'error',
      //   {
      //     'newlines-between': 'always',
      //     alphabetize: {
      //       order: 'asc',
      //       caseInsensitive: true,
      //     },
      //     warnOnUnassignedImports: false,
      //     groups: [
      //       'builtin',
      //       'external',
      //       'internal',
      //       'parent',
      //       'sibling',
      //       'index',
      //       'object',
      //       'type',
      //     ],
      //     pathGroups: [
      //       {
      //         pattern: 'react',
      //         group: 'builtin',
      //         position: 'before',
      //       },
      //       {
      //         pattern: '@test/**',
      //         group: 'builtin',
      //         position: 'before',
      //       },
      //       {
      //         pattern: '@mui/**',
      //         group: 'builtin',
      //         position: 'before',
      //       },
      //       {
      //         pattern: '@nestjs/**',
      //         group: 'builtin',
      //         position: 'before',
      //       },
      //       {
      //         pattern: '@/**',
      //         group: 'internal',
      //       },
      //     ],
      //     pathGroupsExcludedImportTypes: ['react'],
      //   },
      // ],
      // 'no-relative-import-paths/no-relative-import-paths': [
      //   'error',
      //   {
      //     allowSameFolder: true,
      //     rootDir: 'src',
      //     prefix: '@',
      //   },
      // ],
    },
  },
]
