import adapter from '@sveltejs/adapter-auto';


/** @type {import('@sveltejs/kit').Config} */
const config = { // Add preprocessing for Svelte files
    kit: {
        adapter: adapter(),
    },
    
};

export default config;