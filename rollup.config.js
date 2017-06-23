import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import postcss from 'rollup-plugin-postcss';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

let plugins = [
  postcss({
    extensions: ['.css', '.sss']
  }),
  babel(babelrc()),
];

export default {
  entry: 'lib/index.js',
  plugins: plugins,
  external: external,
  globals: {
    react: 'React'
  },
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'rollupStarterProject',
      sourceMap: true
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true
    }
  ]
};
