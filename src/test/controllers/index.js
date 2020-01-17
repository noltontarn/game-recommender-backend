const { 
    insertTest,
    getTest
 } = require('../logics')

async function insertTestController(req, res) {
    console.log(req.body)
    await insertTest(req.body)
    res.json({
        message: "test data inserted"
    })
}

async function getTestController(req ,res) {
    const result = await getTest(req.body.name)
    res.json(result)
}

module.exports = {
    insertTestController,
    getTestController,
}