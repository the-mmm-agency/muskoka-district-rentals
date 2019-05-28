module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/test/__setup__/jest-preprocess.js`,
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/test/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFilesAfterEnv: ['<rootDir>/test/__setup__/setupTests.js'],
  snapshotSerializers: ['jest-emotion'],
  testRegex: '/test/.*?\\.(test|spec)\\.js$',
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/test/__setup__/loadershim.js`],
  watchPlugins: ['jest-watch-typeahead/filename'],
}
