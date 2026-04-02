const mongoose = require('mongoose')
require('dotenv').config()

const { DB_USER, DB_PASSWORD, DB_CLUSTER, DB_NAME } = process.env

const dbConnection = async () => {
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.hprrlaq.mongodb.net/${DB_NAME}?appName=Cluster0`)
}

module.exports = {
    dbConnection
}

