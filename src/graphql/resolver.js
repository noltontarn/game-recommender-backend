const {
    insertTest
} = require('../test/logics')

const createTest = async ({ name, description }, req) => {
    console.log(name, description)
    const id = await insertTest({
        name,
        description
    })
    return id.insertedId
}

const hello = () => {
    return {
        name: 'Hello',
        description: 'World'
    }
}

module.exports = {
    createTest,
    hello,
}