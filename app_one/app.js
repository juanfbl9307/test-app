const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello From App One!')
})

app.listen(port, () => {
    console.log(`App One running on port ${port}`)
})