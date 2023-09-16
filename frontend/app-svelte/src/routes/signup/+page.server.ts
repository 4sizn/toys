import type { Actions, PageServerLoad } from '../signup/$types';

export const load: PageServerLoad = async ({ cookies, fetch }) => {
	return {};
};

export const actions: Actions = {
	signup: async ({ cookies, request, url, fetch }) => {
		try {
			const data = await request.formData();
			console.log(data);
			globalThis
				.fetch('http://localhost:3000/auth/signup', {
					method: 'POST',
					headers: {
						'Content-Type': 'Application/json'
					}
				})
				.then((response) => response.json())
				.then((json) => console.log(json));
		} catch (error) {
			console.error(error);
		}
	}
};
