import type { RouteParams } from './$types';
export function load(params: RouteParams) {
	return {
		post: {
			title: `Title for ${params.slug} goes here`,
			content: `Content for ${params.slug} goes here`
		}
	};
}
