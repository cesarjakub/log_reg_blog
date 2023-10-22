  GNU nano 7.2                                      db.js                                               
import mysql from 'mysql2'


const pool = mysql.createPool({
    host: '',
    user: '',
    password: '',
    database: ''
}).promise()


async function addUser(name, password) {
    try {
        const [existingUsers, fields] = await pool.execute('SELECT * FROM users WHERE name = ?', [name]>
        if (existingUsers.length > 0) {
            console.log('Uživatel s tímto jménem již existuje v databázi.');
        } else {
            const [rows, fields] = await pool.execute('INSERT INTO users (name, password) VALUES (?, ?)>
            console.log('Uživatel byl úspěšně přidán.');
        }
    } catch (error) {
        console.error('Chyba při přidávání uživatele:', error);
    }
}



async function getUserByNameAndPassword(name, password) {
    try {
        const [rows, fields] = await pool.execute('SELECT * FROM users WHERE name = ? AND password = ?'>
        if (rows.length > 0) {
            const user = rows[0];
            console.log('Nalezený uživatel:', user);
        } else {
            console.log('Uživatel s tímto jménem a heslem nebyl nalezen.');
        }
    } catch (error) {
        console.error('Chyba při vyhledávání uživatele:', error);
    }
}
