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
      const user = await db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);

      if (user) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid username or password' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Database error: ' + error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
