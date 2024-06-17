import { openDb } from '../../utils/database';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ error: 'Username and password are required' });
      return;
    }

    try {
      const db = await openDb();

      await db.exec('CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)');
      await db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);

      res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Database error: ' + error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
