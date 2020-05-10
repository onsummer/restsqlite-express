const express = require('express')
const app = express()
let db = require('./database')

const HTTP_PORT = 10010

app.listen(HTTP_PORT, () => {
    console.log(`Server is running on port: ${HTTP_PORT}`)

})

app.get(`/`, (req, res, next) => {
    res.json({"message": "200"})
})

app.get(`/api/users`, (req, res, next) => {
    let sql = "select * from user"
    let params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message})
            return
        }
        res.json({
            "message": "200",
            "data": rows
        })
    })
})

app.use((req, res) => {
    res.status(404)
})