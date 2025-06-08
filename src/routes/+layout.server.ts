export const load = async ({ locals: { user } }) => {
	return { username: user?.username }
}
