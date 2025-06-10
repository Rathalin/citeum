import { product, storage, storageAccess } from '$lib/server/db/schema.js'
import { dateFormatter } from '$lib/utils/formatter'
import { error } from '@sveltejs/kit'
import { and, eq } from 'drizzle-orm'

export async function load({ locals: { db, user }, params }) {
	if (user == null) {
		return error(401, {
			message: 'Unauthorized',
		})
	}

	if (params.uuid.length === 0) {
		return error(404, {
			message: 'Missing uuid in url',
		})
	}

	const storageNameResult = db
		.select({
			storageName: storage.name,
		})
		.from(storage)
		.where(eq(storage.uuid, params.uuid))
		.get()

	if (storageNameResult == null) {
		return error(404, {
			message: 'Not found',
		})
	}

	const products = await db
		.select({
			id: product.id,
			bestBeforeDate: product.bestBeforeDate,
			name: product.name,
		})
		.from(product)
		.innerJoin(storage, eq(storage.id, product.storageId))
		.innerJoin(storageAccess, eq(storageAccess.storageId, storage.id))
		.where(and(eq(storage.uuid, params.uuid), eq(storageAccess.userId, user.id)))
	return {
		products: products.map(({ bestBeforeDate, ...other }) => ({
			...other,
			bestBeforeDate:
				bestBeforeDate != null ? dateFormatter.format(new Date(bestBeforeDate)) : null,
		})),
		storage: {
			name: storageNameResult.storageName,
		},
	}
}
