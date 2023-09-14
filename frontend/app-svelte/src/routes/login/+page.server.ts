import type { Actions, PageServerLoad } from '../logout/$types';

export const load: PageServerLoad = async ({ cookies }) => {
	console.log('hsshin');

	return {};
};
export const actions: Actions = {
	login: async ({ cookies, request, url, fetch }) => {
		try {
			const data = await request.formData();
			console.log(data);
			const path = import.meta.env.VITE_WEB_API_URL + '/auth/login';

			const res = await fetch(path, {
				method: 'GET',
				body: data,
				headers: {
					'Content-Type': 'Application/json'
				}
			});
			console.log('asdfasd', res);
			//
			return {};
		} catch (error) {
			console.error(error);
		}
	}
};
