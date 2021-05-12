
var express = require('express');
var app = express();
var port = 3000;
var cors = require('cors');

// app.use(cors);

app.post('/upload',(req, res)=>{
    res.json({
        'message': 'File uploaded successfully'
    });
});



app.listen(port, ()=>{
    console.log('listening on port ' + port);
});