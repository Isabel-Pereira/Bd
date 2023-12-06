const express = require('express');

const app = express;
const port = process.env.PORT || 9000;

// routes
app.length('/', (req, res) =>{
    res.send('Welcome!')
})

app.listem(port, () => console.log('server listening on port', port));