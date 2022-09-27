var fs = require('fs');

const webp = require('webp-converter');

var folderName = 'homepage-seq';

var sourceFolder = './src/' + folderName;
var destFolder = './compressed/' + folderName;

var desiredQuality = 60;

//////////////////////////////////////////

if (!fs.existsSync('./src')){ fs.mkdirSync('./src'); }
if (!fs.existsSync('./compressed')){ fs.mkdirSync('./compressed'); }
if (!fs.existsSync('./compressed/'+folderName)){ fs.mkdirSync('./compressed/'+folderName); }

//////////////////////////////////////////

// Loop through all the files in the temp directory
fs.readdir(sourceFolder, function (err, files) {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }
  
    files.forEach(function (file, index) {
        var fileName = file.split(".")[0];
        // var fileExt = file.split(".")[1];

        var sourceFile = sourceFolder + '/' + file;
        var destFile = destFolder + '/' + fileName + '.webp';

        const result = webp.cwebp(sourceFile, destFile, `-q ${desiredQuality}`, logging="-v");
        result.then((response) => {
            console.log(response);
        });

    });
});