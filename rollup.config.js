import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

// return a promise
export default {
  experimentalDynamicImport: true,
  input: 'a.js',
  output: {
    file: 'dist/index.js',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    resolve(),
    commonjs({}),
  ],
  external: ['fs', 'path', 'stream'],
};
