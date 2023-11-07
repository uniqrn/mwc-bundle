import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default [{
	input: 'mwc.js',
	output: {
		dir: 'dist',
		format: 'es',
		sourcemap: false
	},
	plugins: [
		commonjs(),
		resolve(),
		terser()
	]
}];
