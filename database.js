const sqlite3 = require('sqlite3')
const md5 = require('md5')

const DBSOURCE = `./data/mydb.db`

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log("Connected to SQLITE3 db.")
        db.run(`CREATE TABLE user(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            password text
        )`, err => {
            if (err) {

            } else {
                let insert = `INSERT INTO user (name, password) VALUES (?,?)`
                db.run(insert, ["admin", "123456"])
                db.run(insert, ["agcim", md5("agcim")])
            }
        }) 
    }
})

module.exports = db