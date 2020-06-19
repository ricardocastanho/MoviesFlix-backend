const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')

const resolvers = require('./resolvers/index')
const schemaPath = './schema/index.graphql'
const context = require('./middleware/auth')

require('./database')

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers,
    context
})

server.listen(7542).then(({ url }) => {
    console.log(`Executando em ${url}`)
})