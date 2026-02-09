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
	group('foundations', {
		items: [
			'guides/example',
			group('foundations.hello', {
				items: [
					'guides/example',
					'guides/example',
					'guides/example',
					'guides/example',
				],
			}),
			group('foundations.intro', {
				items: ['guides/example', 'guides/example', 'guides/example'],
			}),
			group('foundations.kotlin', {
				items: [
					'guides/example',
					'guides/example',
					'guides/example',
					'guides/example',
					'guides/example',
					'guides/example',
				],
			}),
			group('foundations.intro', {
				collapsed: true,
				autogenerate: { directory: 'guides/example' },
			}),
		],
	}),

	// Guides tab
	group('core', {
		items: [
			group('core.interop', {
				items: [
					'guides/example',
				],
			}),
			group('core.networking', {
				items: [
					'guides/example',
				],
			}),
		],
	}),
] satisfies StarlightUserConfig['sidebar'];