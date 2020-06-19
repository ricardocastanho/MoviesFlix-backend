const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')

const resolvers = require('./resolvers/index')
const schemaPath = './schema/index.graphql'

require('./database')

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
})

server.listen(4328).then(({ url }) => {
    console.log(`Executando em ${url}`)
})