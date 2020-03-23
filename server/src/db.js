const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "pg",
    host: "localhost",
    database: "pernstack",
    port: 5433
})

module.exports = pool;