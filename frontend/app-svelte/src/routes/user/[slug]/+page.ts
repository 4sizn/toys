import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	try {
		const res = await fetch('http://localhost:3001/reels', {
			method: 'GET',
			headers: {
				'Content-Type': 'Application/json'
			}
		}).then((d) => d.json());
		return {
			reels: res
		};
	} catch (e) {
		console.error(e);
	}
};
