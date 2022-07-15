const express = require('express');
const { graphqlHTTP }  = require('express-graphql');
const { createGraphQLSchema } = require('openapi-to-graphql')

async function main(oas) {
  // generate schema:
  const { schema, report } = await createGraphQLSchema(oas)

  // server schema:
  const app = express()
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true
    })
  )
  app.listen(3004)
}

const oas = require('./swagger.json')
main(oas)