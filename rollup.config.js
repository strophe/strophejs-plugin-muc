import coffeescript from 'rollup-plugin-coffee-script';

export default {
  entry: 'src/strophe.muc.coffee',
  dest: 'lib/strophe.muc.js',
  format: 'umd',
  globals: {
    'strophe.js': 'window',
  },
  external: ['strophe.js'],
  plugins: [
    coffeescript()
  ],
  sourceMap: true
}
