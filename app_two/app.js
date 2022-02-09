const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Hello From App Two!')
})

app.listen(port, () => {
    console.log(`App One running on port ${port}`)
})