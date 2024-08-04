/** @type {import("syncpack").RcFile} */
const config = {
  dependencyTypes: ['dev', 'peer', 'prod'],
  source: ['package.json', 'packages/*/package.json'],
  semverGroups: [
    {
      range: '',
      dependencies: ['**'],
    },
  ],
  versionGroups: [
    {
      label: 'Internal config packages should be pinned to "*" (meaning any version is acceptable)',
      dependencies: ['@inspira-legal/*'],
      packages: ['**'],
      dependencyTypes: ['dev'],
      pinVersion: '*',
    },
  ],
  sortAz: [
    'bin',
    'main',
    'keywords',
    'contributors',
    'scripts',
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'resolutions',
  ],
}

module.exports = config
