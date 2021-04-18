'use strict';

const express = require('express');

//constants
const PORT = 8080;
const HOST = '0.0.0.0';

const App = express();

App.get('/', (req, resp)=>{
    resp.send('Hello world');
});

App.listen(PORT, HOST);
console.log(`Running on http://${HOST}/${PORT}`);