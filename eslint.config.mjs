// @ts-check

import inspiraEslintConfigRecommended from '@inspira-legal/eslint-config-recommended'
import inspiraEslintConfigTypescript from '@inspira-legal/eslint-config-typescript'
import { config } from 'typescript-eslint'

export default config({
  files: ['**/*.{js,ts,tsx}'],
  extends: [...inspiraEslintConfigRecommended, ...inspiraEslintConfigTypescript],
})
