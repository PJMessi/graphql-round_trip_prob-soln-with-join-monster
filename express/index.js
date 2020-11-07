import express from 'express'
import 'dotenv/config'
import authMiddleware from './middlewares/auth'

// initializing express.
const app = express()

// using auth middleware.
app.use(authMiddleware)

app.use('/', (req, res) => {
    if (!req.authCheck) {
        throw new Error('unauthenticated.')
    }
    res.send('Express server. Graphql with join monster.')
})

// starting server.
const port = process.env.APP_PORT || 3000
app.listen(port, () => {
    console.log(`Listening on the port ${port}`)
})