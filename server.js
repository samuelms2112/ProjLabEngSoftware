const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const app = express();
var bodyParser = require('body-parser')
const port = process.env.PORT || 5000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());
app.use(router);

app.get('/home', (req, res) => {
    res.send({ express: 'Ola eu sou o Express.' });
});


app.listen(port, () => console.log(`Listening on port ${port}`));