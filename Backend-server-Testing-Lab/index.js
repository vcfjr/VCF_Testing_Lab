
var express = require('express');
var app = express();
var port = 3000;
var cors = require('cors');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    storage: 'vedik'
});

var azure = require('azure-storage');
var blobStorage = azure.createBlobService("DefaultEndpointsProtocol=https;AccountName=vedikstorage;AccountKey=7OmeGweYiFuBYd+/nzBAj3chFHo0vycwFc95s2yfbYpDOEbVPEnHY1lI5KWZms2G7O1//8F1JmGt2jcueom8jg==;EndpointSuffix=core.windows.net");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// For Cloud Storage
app.post('/upload',multipartMiddleware,(req, res)=>{
    console.log(req.body)

    blobStorage.createBlockBlobFromLocalFile('imagecontainer', req.files.file.name , req.files.file.path, function(err, result, response){
        if(!err){
            res.send({
                'message': 'File uploaded successfully.'
            })
        }
        else{
            console.log(err);
        }
    });

    
});


// app.post('/upload',multipartMiddleware,(req, res)=>{
//     console.log(req.body)
//     res.json({
//         'message': 'File uploaded successfully.'
//     });
//     console.log(req.files.file.path);
// });

app.get('/upload', (req, res) => {
    res.json({
        'message': 'hello'
    });
});


app.listen(port, ()=>{
    console.log('listening on port ' + port);
});