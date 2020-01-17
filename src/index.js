require('./environment')

const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')

const graphqlSchema = require('./graphql/schema')
const graphqlResolver = require('./graphql/resolver')

const {
    mongoConnect
} = require('./helpers/mongodb')

const app = express()

app.use('/graphql', graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}))

const router = require('./router')

app.use(bodyParser.json())
app.use(router)

mongoConnect(() => {
    app.listen(8088)
})