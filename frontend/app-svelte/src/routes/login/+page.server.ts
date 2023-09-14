import type { Actions, PageServerLoad } from '../logout/$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
	console.log('hsshin');

	return {};
};
export const actions: Actions = {
	login: async ({ cookies, request, url }) => {
		try {
			const data = await request.formData();
			console.log(data);
			const path = import.meta.env.VITE_WEB_API_URL + '/auth/login';
			console.log('asdfasd', path);
			//
			return {};
		} catch (error) {
			console.error(error);
		}
	}
};
