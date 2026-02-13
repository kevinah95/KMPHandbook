// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './astro.sidebar';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'KMP Handbook',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kevinah95/KMPHandbook' }],
			sidebar,
		}),
	],
});
