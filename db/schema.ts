import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const opportunities = sqliteTable('opportunities', { id: text('id').primaryKey(), payload:text('payload').notNull(), status:text('status').notNull().default(''), notes:text('notes').notNull().default(''), revision:integer('revision').notNull().default(1), updatedAt:text('updated_at').notNull() });
export const researchRuns = sqliteTable('research_runs', {id:text('id').primaryKey(), payload:text('payload').notNull(), createdAt:text('created_at').notNull()});
