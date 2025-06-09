import { redirect } from '@sveltejs/kit'

export async function load({ locals: { user } }) {
	if (user == null) {
		return redirect(302, '/demo/lucia/login')
	}
	return {}
}
