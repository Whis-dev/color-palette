// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// const dev = process.env.NODE_ENV === 'development';

// console.log(process.env)

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// paths: {
		// 	base: dev ? '' : '/color-palette'
		// },
		trailingSlash: 'always'
	}
};

export default config;
