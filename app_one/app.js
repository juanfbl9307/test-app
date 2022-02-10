const express = require('express')
const axios = require("axios");
const app = express()
const port = process.env.APP_PORT

async function getByAxios() {
    try {
        const axiosResponse = await axios.get(
            'http://apptwo:8080/apptwo/say-hello',
        );
        return axiosResponse.data;
    } catch (e) {
        console.log(e);
        return "... no one response";
    }
}

app.get('/appone/app-two', async (req, res) => {
    const response = await getByAxios();
    res.json({
        message: `Who is there? ${response.message}`
    });
})

app.get('/appone', async (req, res) => {
    res.json({message: 'Hello From App One!'});
})

app.get('/appone/say-hello', (req, res) => {
    res.json({message: 'Hey, here App One!'});
})

app.listen(port, () => {
    console.log(`App One running on port ${port}`);
})