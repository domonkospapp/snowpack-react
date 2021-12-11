/* eslint-disable import/no-extraneous-dependencies */
const webTestRunner = require('@snowpack/web-test-runner-plugin');

process.env.NODE_ENV = 'test';

module.exports = {
  plugins: [webTestRunner()],
};
