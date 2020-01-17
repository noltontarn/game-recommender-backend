const {
    buildSchema
} = require('graphql')

const root = buildSchema(`
    type TestData {
        name: String!
        description: String!
    }

    type RootQuery {
        hello: TestData
    }

    type RootMutation {
        createTest(name: String!, description: String!): String
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)

module.exports = root