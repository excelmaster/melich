const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res ) =>{
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
app.set('port', '5000');
app.listen(app.get('port'), ()=>{
    console.log('app port: ' + app.get('port'));
});
