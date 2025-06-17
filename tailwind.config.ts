// tailwind.config.js
import pxToViewport from 'tailwindcss-px-to-viewport';

export default {
	theme: {
		extend: {
			pxToViewPort: {
				// Base viewport configuration
				PresetScreen: {
					width: 1920, // Default design width (in px)
					height: 1080, // Default design height (in px)
				},
				// Custom extension rules (optional)
				utilities: {
					// Add custom conversion rules here
					'border-t': 'border-top',
					'border-r': 'border-right',
					'border-b': 'border-bottom',
					'border-l': 'border-left',
					'gap-x': 'column-gap',
					'gap-y': 'row-gap',
					'grid-cols': 'grid-template-columns',
					ps: 'padding-inline-start',
				},
			},
		},
	},
	plugins: [
		pxToViewport(), // Enable the plugin
	],
};
