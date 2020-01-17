const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let db

async function mongoConnect(callback) {
    try {
        const client = await MongoClient.connect(
            process.env.MONGO
        )
        
        console.log('connected')
        db = client.db()
        callback()
    } catch(error) {
        console.log(error)
        throw error
    }
}

function getDb() {
    if (db) {
        return db
    }
    throw 'No database found'
}

module.exports = {
    mongoConnect,
    getDb,
}