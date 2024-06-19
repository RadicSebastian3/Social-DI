import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb() {
  return open({
    filename: './social-di.db', // Specify a file-based database
    driver: sqlite3.Database
  });
}
