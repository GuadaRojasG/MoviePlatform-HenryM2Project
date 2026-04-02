// Levanta el servidor y genera las conexiones necesarias

const { app } = require('./src/server')
const { dbConnection } = require('./src/db/dbConfig')

const { PORT } = process.env

dbConnection()
    .then(() => {
        console.log('Successful connection to database')
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`)
        })
    })
    .catch( err => console.log(err) )