export default {
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  plugins: [
    ['@canarise/snowpack-eslint-plugin', {
      globs: ['src/**/*.js', 'src/**/*.js'],
      formatter: 'stylish',
    }],
  ],
};
