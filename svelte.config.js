import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: '404.html'
        }),
    },
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx'],
    prerender: {
        default: true
    }
};

export default config;
