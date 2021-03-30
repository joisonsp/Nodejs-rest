module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota dos atendimentos e está realizando um GET'))
}