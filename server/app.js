const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const PORT = 3001

const app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
    graphiql: true
}))

app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`))
