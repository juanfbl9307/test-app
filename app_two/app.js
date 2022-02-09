const axios = require("axios");
const express = require("express");
const app = express()
const port = process.env.APP_PORT

async function getByAxios() {
    try {
        const axiosResponse = await axios.get(
            'http://oneapp/say-hello',
        );
        return axiosResponse.data;
    } catch (e) {
        console.log(e);
        return "... no one response";
    }
}

app.get('/app-one', async (req, res) => {
    const response = await getByAxios();
    res.send(`Who is there? ${response}`);
});


app.get('/', (req, res) => {
    res.send('Hello From App Two!');
});

app.get('/say-hello', (req, res) => {
    res.send('Hey, here App Two!');
});

app.listen(port, () => {
    console.log(`App Two running on port ${port}`);
});