import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.js',
    output: [
        {
            name: 'debug',
            file: 'dist/index.js',
            format: 'umd',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm'
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] }),
    ]
}
