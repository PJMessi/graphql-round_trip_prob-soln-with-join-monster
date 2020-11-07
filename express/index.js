import express from 'express'
import 'dotenv/config'
import authMiddleware from './middlewares/auth'
import { ApolloServer, gql }from 'apollo-server-express';
import typeDefs from './graphql/typeDefs/index'
import resolvers from './graphql/resolvers/index'
import corsMiddleware from './middlewares/cors'
import Mongoose from 'mongoose';

// initializing express.
const app = express()

// using middlewared.
app.use(corsMiddleware)
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

// connecting to mongodb.
Mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true })
.then(() => {
    console.log('Connected to Mongodb.')
})
.catch(() => {
    console.error('Could not connect to Mongodb.')
})

// starting server.
const port = process.env.APP_PORT || 3000
app.listen(port, () => {
    console.log(`🚀 Server ready at port ${port}`)
})