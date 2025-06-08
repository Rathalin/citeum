import { sqliteTable, integer, text, primaryKey } from 'drizzle-orm/sqlite-core'

export const product = sqliteTable('product', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	bestBeforeDate: text('best_before_date').notNull(),
})

export const storage = sqliteTable('storage', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull().unique(),
})

export const storageAccess = sqliteTable(
	'storage_access',
	{
		userId: text('user_id')
			.notNull()
			.references(() => user.id),
		storageId: integer('storage_id')
			.notNull()
			.references(() => storage.id),
	},
	(table) => [primaryKey({ columns: [table.userId, table.storageId] })],
)

export const user = sqliteTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull(),
})

export const session = sqliteTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull(),
})

export type Product = typeof product.$inferSelect
export type Storage = typeof storage.$inferSelect
export type StorageAccess = typeof storageAccess.$inferSelect
export type Session = typeof session.$inferSelect
export type User = typeof user.$inferSelect
