const express = require('express')

const app = express()

app.listen(3000, () => console.log('o servidor ta rodando na porta 3000'))

app.get('/atendimentos', (req, res) => res.send('Você está na rota dos atendimentos'))