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
	// PARTE I: LOS CIMIENTOS
	group('foundations', {
		items: [
			// 'guides/example',
			group('foundations.intro', {
				items: [
					'foundations/intro',
				],
			}),
			group('foundations.kotlin', {
				items: [
                    'foundations/kotlin',
                ],
			}),
			group('foundations.hello', {
				items: [
					'foundations/hello',
				],
			}),
		],
	}),

	// PARTE II: EL NÚCLEO COMPARTIDO
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
            group('core.persistence', {
				items: [
					'guides/example',
				],
			}),
            group('core.arch', {
				items: [
					'guides/example',
				],
			}),
		],
	}),
    // PARTE III: UI COMPARTIDA (COMPOSE)
    group('ui', {
		items: [
			group('ui.thinking', {
				items: [
					'guides/example',
				],
			}),
			group('ui.components', {
				items: [
					'guides/example',
				],
			}),
            group('ui.navigation', {
				items: [
					'guides/example',
				],
			}),
		],
	}),
    // PARTE IV: INTEGRACIÓN NATIVA & DESPLIEGUE
    group('native', {
		items: [
			group('native.android', {
				items: [
					'guides/example',
				],
			}),
			group('native.ios', {
				items: [
					'guides/example',
				],
			}),
            group('native.dist', {
				items: [
					'guides/example',
				],
			}),
		],
	}),
    // APÉNDICES
    group('reference', {
        items: [
            group('reference.glossary', {
                items: [
                    'guides/example',
                ],
            }),
            group('reference.gradle', {
                items: [
                    'guides/example',
                ],
            }),
            group('reference.catalog', {
                items: [
                    'guides/example',
                ],
            }),
        ],
    }),
] satisfies StarlightUserConfig['sidebar'];