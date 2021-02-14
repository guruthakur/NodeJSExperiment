var fs = require('fs');


// sync code 
// Add directory
//fs.mkdirSync('stuff');
// remove directory
//fs.rmdirSync('stuff');

/*
// Async Code
fs.mkdir('stuff', function(){
    fs.readFile('read.txt','utf8', function(err,data){
        fs.writeFile('./stuff/writeMe.txt',data);
    })
})
*/

// Remove file
fs.unlink('./stuff/writeme.txt');
