const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3001; //para el deploy


const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(3001, () => console.log(`Servidor corriendo ${port}`));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});


