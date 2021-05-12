
var express = require('express');
var app = express();
var port = 3000;
var cors = require('cors');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: './upload'
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.post('/upload',multipartMiddleware,(req, res)=>{
    console.log(req.body)
    res.json({
        'message': 'File uploaded successfully.'
    });
    console.log(req.files.file.path);
});

app.get('/upload', (req, res) => {
    res.json({
        'message': 'hello'
    });
});


app.listen(port, ()=>{
    console.log('listening on port ' + port);
});