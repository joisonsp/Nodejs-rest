const customExpress = require('./config/customExpress')
const app = customExpress()
app.listen(3000, () => console.log('o servidor ta rodando na porta 3000'))

