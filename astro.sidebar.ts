import type { StarlightUserConfig } from '@astrojs/starlight/types';
import { group } from './config/sidebar';

/**
 * Starlight sidebar configuration object for the global site sidebar.
 *
 * - Top-level groups become tabs.
 * - Use the `group()` utility function to define groups. This uses labels from our
 *   `src/content/nav/*.ts` files instead of defining labels and translations inline.
 *
 */
export const sidebar = [
	// Start tab
	group('start', {
		items: [
			'guides/example',
			group('start.welcome', {
				items: [
					'guides/example',
					'guides/example',
					'guides/example',
					'guides/example',
				],
			}),
			group('start.newProject', {
				items: ['guides/example', 'guides/example', 'guides/example'],
			}),
			group('start.config', {
				items: [
					'guides/example',
					'guides/example',
					'guides/example',
					'guides/example',
					'guides/example',
					'guides/example',
				],
			}),
			group('start.migrate', {
				collapsed: true,
				autogenerate: { directory: 'guides/example' },
			}),
		],
	}),

	// Guides tab
	group('guides', {
		items: [
			group('guides.routing', {
				items: [
					'guides/example',
				],
			}),
			group('guides.ui', {
				items: [
					'guides/example',
				],
			}),
		],
	}),
] satisfies StarlightUserConfig['sidebar'];