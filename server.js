const express = require('express')
const app = express()

app.use(express.json())

const usersRouter = require('./controllers/users')

app.use('/', usersRouter)

// rodar servidor na porta 3000 - http://localhost:3000/users
app.listen(3000, () => {
    console.log(`Servidor rodando!!`)
})