import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs'
        },
        {
            file: 'dist/index.es.js',
            format: 'es'
        }
    ],
    plugins: [
        typescript(),
        postcss({
            extract: true,
            modules: true,
            use: ['sass']
        })
    ],
    external: ['react', 'react-dom']
};
