import sqlite from 'sqlite';
import { open, Database } from 'sqlite';
import { Post } from '../types/PostsType';

let db: Database | null = null;

export const initializeDatabase = async () => {
    try {
        db = await open({
            filename: './path/to/social-di.db',
            driver: sqlite.Database
        });

        await db.exec(`
            CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY,
                userId INTEGER,
                post TEXT,
                postedBy TEXT,
                date TEXT,
                avatar TEXT
            )
        `);
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error;
    }
};

export const getAllPosts = async (): Promise<Post[]> => {
  if (!db) throw new Error('Database not initialized');

  const rows = await db.all('SELECT * FROM posts ORDER BY id DESC');
  return rows;
};

export const addNewPost = async (newPost: Post) => {
  try {
      if (!db) throw new Error('Database not initialized');

      await db.run(
          'INSERT INTO posts (userId, post, postedBy, date, avatar) VALUES (?, ?, ?, ?, ?)',
          newPost.userId,
          newPost.post,
          newPost.postedBy,
          newPost.date,
          newPost.avatar
      );
  } catch (error) {
      console.error('Error adding new post:', error);
      throw error;
  }
};
