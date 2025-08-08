import { drizzle } from 'drizzle-orm/better-sqlite3';
import { PostsTable } from './schemas';
import Database from 'better-sqlite3';
import { resolve } from 'path';

const sqliteDbPath = resolve(process.cwd(), 'db.sqlite3');
const sqliteDb = new Database(sqliteDbPath);

export const drizzelDb = drizzle(sqliteDb, {
  schema: {
    posts: PostsTable,
  },
  logger: true,
});
