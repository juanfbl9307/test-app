const express = require('express')
const axios = require("axios");
const app = express()
const port = process.env.APP_PORT

async function getByAxios() {
    try {
        const axiosResponse = await axios.get(
            'http://apptwo/say-hello',
        );
        return axiosResponse.data;
    } catch (e) {
        console.log(e);
        return "... no one response";
    }
}

app.get('/app-two', async (req, res) => {
    const response = await getByAxios();
    res.send(`Who is there? ${response}`);
})

app.get('/', async (req, res) => {
    res.send('Hello From App One!');
})

app.get('/say-hello', (req, res) => {
    res.send('Hey, here App One!');
})

app.listen(port, () => {
    console.log(`App One running on port ${port}`);
})