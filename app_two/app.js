const axios = require("axios");
const express = require("express");
const app = express()
const port = process.env.APP_PORT

async function getByAxios() {
    try {
        const axiosResponse = await axios.get(
            'http://appone:8080/appone/say-hello',
        );
        return axiosResponse.data;
    } catch (e) {
        console.log(e);
        return "... no one response";
    }
}

app.get('/apptwo/app-one', async (req, res) => {
    const response = await getByAxios();
    res.json({
        message: `Who is there? ${response.message}`
    });
});


app.get('/apptwo', (req, res) => {
    res.json({message:'Hello From App Two!'});
});

app.get('/apptwo/say-hello', (req, res) => {
    res.json({message:'Hey, here App Two!'});
});

app.listen(port, () => {
    console.log(`App Two running on port ${port}`);
});