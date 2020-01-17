const { getDb } = require('../../helpers/mongodb')

async function insertTest(data) {
    const {
        name,
        description
    } = data
    const db = getDb()
    const id  = await db.collection('test').insertOne({
        name: name,
        description: description
    })
    return id
}

async function getTest(name) {
    const db = getDb()
    const regex = new RegExp(`.*${name}.*`, 'i')
    const result = await db.collection('test').find({
        $or: [ {name: { $regex: regex }}, {description: { $regex: regex }} ]
    })
    return result.toArray()
}

module.exports = {
    insertTest,
    getTest
}