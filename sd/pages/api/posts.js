const sqlite3 = require('sqlite3').verbose();

// Verbindung zur SQLite-Datenbank herstellen
let db = new sqlite3.Database('./path/to/social-di.db');

// Funktion zum Hinzufügen eines neuen Posts
const addNewPost = (newPost, callback) => {
    db.run(
        'INSERT INTO posts (userId, post, postedBy, date, avatar) VALUES (?, ?, ?, ?, ?)',
        newPost.userId,
        newPost.post,
        newPost.postedBy,
        newPost.date,
        newPost.avatar,
        (err) => {
            if (err) {
                console.error('Error adding new post:', err);
                callback(err);
            } else {
                console.log('New post added successfully');
                callback(null);
            }
        }
    );
};

// Funktion zum Abrufen aller Posts
const getAllPosts = (callback) => {
    db.all('SELECT * FROM posts ORDER BY id DESC', (err, rows) => {
        if (err) {
            console.error('Error fetching posts:', err);
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
};

module.exports = {
    addNewPost,
    getAllPosts
};
