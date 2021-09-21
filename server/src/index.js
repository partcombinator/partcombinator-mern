const express = require('express');
const cors = require('cors');
require("dotenv").config({ path: ".env" });
require('./database/database');

const app = express();
const PORT = process.env.PORT || process.env.SERVER_PORT;

app.use(cors());
app.use(express.json({ extended: true }));

// Routs
app.get('/', function (req, res) {res.send('Server: MarlonApps');});
app.use('/api/user', require("./routes/user.routing"));
app.use('/api/config', require("./routes/config.routing"));
app.use('*', (req, res) => res.status(404).send("Rout not Found"));

// Run
app.listen(PORT, () => {
    console.log(`Server Run in Port: : ${PORT}`)
})