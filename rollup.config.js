import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/simple-react.js',
    format: 'iife',
    name: 'SimpleReact',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: [],
      plugins: [
        ['@babel/plugin-transform-react-jsx', { pragma: 'SimpleReact.createElement' }]
      ]
    })
  ]
};
