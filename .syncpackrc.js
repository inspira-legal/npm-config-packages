/** @type {import("syncpack").RcFile} */
const config = {
  dependencyTypes: ['dev', 'peer', 'prod'],
  semverRange: '',
  source: ['package.json', 'packages/*/package.json'],
  versionGroups: [
    {
      label: 'Internal config packages should be pinned to "*" (meaning any version is acceptable)',
      dependencies: [
        'cspell-config',
        'eslint-config-base',
        'eslint-config-react',
        'prettier-config',
        'tsconfig-config'
      ],
      packages: ['**'],
      dependencyTypes: ['dev'],
      pinVersion: '*'
    }
  ],
  sortAz: [
    'contributors',
    'keywords',
    'scripts',
    'dependencies',
    'peerDependencies',
    'devDependencies',
    'resolutions'
  ]
}

module.exports = config
