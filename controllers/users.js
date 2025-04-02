const express = require('express')
const router = express.Router()

const app = express()

// lista de usuarios temporaria(quando servidor for reniciado as informações são perdidas)
let users = []

// cadastro do usuario no POST do thunderclient
// cadastro no body com json = {"nome": "Fernando", "email": "fernando@email.com"}
router.post("/users", async (req, res) => {
    try {
        const { nome, email } = req.body

        if (!nome || !email) {
            return res.status(400).json({ mensagem: "Precisa preencher nome e email!" })
        }

        const newUser = { id: users.length + 1, nome, email }


        await new Promise(resolve => setTimeout(resolve, 500))

        users.push(newUser)

        res.status(201).json(newUser)
    } catch (err) {
        res.status(500).json({ mensagem: `Erro: ${err}` })
    }
})

// lista de usuarios no GET do thunderclient
router.get("/users", async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    res.json(users) 
})

module.exports = router;