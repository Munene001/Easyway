import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'; // Updated import path

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: 'index.html', // For SPA behavior
      strict: false // Allows dynamic routes
    }),
    prerender: {
      entries: ['/', '/about', '/contact', '/news', '/careers', '/easyway-credit','/dashboard','/businessloan', '/logbookloan', '/salaryloan','/history','/assetfinanceloan' ,'/blog'] // Prerender known static pages
    }
  },
  preprocess: vitePreprocess()
};

export default config;