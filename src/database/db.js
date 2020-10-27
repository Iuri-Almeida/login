// importando bibliotecas
const Database = require('sqlite-async');
const path = require('path');

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS registers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            phone TEXT,
            password TEXT
        );
    `)
}

module.exports = Database.open(path.join(__dirname, 'database.sqlite')).then(execute);