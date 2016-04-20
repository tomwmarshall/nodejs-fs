var fs = require('fs');
var prompt = require('prompt');
var buf = new Buffer(1024);
prompt.start();

function openfile(filename) {
    fs.open(filename, 'r+', function(err, fd) {
        if (err) {
            return console.error(err);
        }
    });
}

function readfile(filename) {
    fs.readFile(filename, function(err, data) {
       if (err) {
           return console.error(err);
       }
       console.log('File contents: ' + data.toString());
    });
}

function writefile(filename, input) {
    fs.writeFile(filename, input, function(err) {
        if (err) {
            return console.error(err);
        }
    });
}

prompt.get(['filename', 'message'], function (err, result) {
    openfile(result.filename);
    readfile(result.filename);
    writefile(result.filename, result.message);
});