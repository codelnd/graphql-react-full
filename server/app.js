const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const PORT = 3001
const schema = require('./schema')
const app = express()
const allUsers = [{
    id: 1,
    username: "Denis",
    age: 28
}]

app.use(cors())


const createUser = ({input}) => {
    const id = Date.now()
    return {
        id, ...input
    }
}

const root = {
    getAllUsers: () => {
        return allUsers
    },
    getUser: ({id}) => {
        return allUsers.find(user => user.id == id)
    },
    createUser: ({input}) => {
        const user = createUser(input)
        allUsers.push(user)
        return user
    }
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`))
