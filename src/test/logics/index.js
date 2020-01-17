const { getDb } = require('../../../helpers/mongodb')

async function insertTest(data) {
    const {
        name,
        description
    } = data
    console.log('inserting')
    const db = getDb()
    await db.collection('test').insertOne({
        name: name,
        description: description
    })
    console.log('inserted')
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