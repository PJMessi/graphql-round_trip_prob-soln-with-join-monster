import express from 'express'
import 'dotenv/config'
import authMiddleware from './middlewares/auth'
import { ApolloServer, gql }from 'apollo-server-express';
import typeDefs from './graphql/typeDefs/index'
import resolvers from './graphql/resolvers/index'

// initializing express.
const app = express()

// using auth middleware.
app.use(authMiddleware)

// using graphql middleware
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

// routes.
app.get('/', (req, res) => {
    if (!req.authCheck) {
        throw new Error('unauthenticated.')
    }
    res.send('Express server. Graphql with join monster.')
})

// starting server.
const port = process.env.APP_PORT || 3000
app.listen(port, () => {
    console.log(`🚀 Server ready at port ${port}`)
})