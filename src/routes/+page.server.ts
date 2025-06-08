import { storage, storageAccess, user } from '$lib/server/db/schema'
import { eq } from 'drizzle-orm'

export const load = async ({ locals: { db, user: u } }) => {
	if (u == null) {
		return {
			storages: [],
			username: null,
		}
	}
	const storages = await db
		.select({
			uuid: storage.uuid,
			name: storage.name,
		})
		.from(storage)
		.innerJoin(storageAccess, eq(storageAccess.storageId, storage.id))
		.innerJoin(user, eq(user.id, storageAccess.userId))
		.where(eq(user.id, u.id))
	return {
		storages,
		username: u.username,
	}
}
