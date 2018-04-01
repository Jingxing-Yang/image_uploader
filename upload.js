
var fs = require('fs');
var path = "../1.jpg";



//var postData = {pic:inputFile};
var request = require('request');

function upload()
{
    var imageFile = fs.readFileSync(path);
    // Covert the image data to a Buffer and base64 encode it.
    var inputFile = new Buffer(imageFile).toString('base64');
    request.post(
        'http://35.185.235.43:3000/pic',
         { json: { pic: inputFile } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        }
    );
}
setInterval(upload,1000);