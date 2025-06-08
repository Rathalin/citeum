import { storage, storageAccess, user } from '$lib/server/db/schema'
import { eq } from 'drizzle-orm'
import type { Actions, PageServerLoad } from './$types'

export const load = (async ({ locals: { db } }) => {
	const rows = await db
		.select({
			storageName: storage.name,
			username: user.username,
		})
		.from(storage)
		.innerJoin(storageAccess, eq(storageAccess.storageId, storage.id))
		.innerJoin(user, eq(user.id, storageAccess.userId))
	return rows.at(0)
}) satisfies PageServerLoad

export const actions = {} satisfies Actions
