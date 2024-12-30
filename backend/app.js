const express = require('express');
const { port } = require('./config/config.js');

const app = express();
const initConnection = require('./config/database.js');
initConnection();

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});

require('./routes/main.js')(app);

//TODO Need to figure out the database connection