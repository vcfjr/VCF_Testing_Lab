
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
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// For Cloud Storage
app.post('/upload', multipartMiddleware, async (req, res) => {
    console.log(req.body)



    for (var i = 0; i < req.files.file.length; i++) {
        // let upload = "";
        // console.log(req.files.file[i].name)
        var name = req.files.file[i].name;
        blobStorage.createBlockBlobFromLocalFile('imagecontainer', name, req.files.file[i].path,  (err, result, response)=> {
            if (!err) {
                // console.log() blobStorage.getUrl('imagecontainer', name)

                console.log(blobStorage.getUrl('imagecontainer', name))
            }
            else {
                console.log(err);
            }
        })

        if(i === req.files.file.length - 1)
        {
            console.log("status")
            res.send({
                'message': 'File uploaded successfully.'
            });

        }
        
        console.log(blobStorage.getUrl('imagecontainer', name))
    }

    

    // res.send({
    //     'message': 'File uploaded successfully.'
    // })


    // console.log(url)


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


app.listen(port, () => {
    console.log('listening on port ' + port);
});