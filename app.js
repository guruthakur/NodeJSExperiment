var fs = require('fs');




// Async way to handle the files

fs.readFile('Read.txt', 'utf8', function (err, data) {
    console.log(data);
    fs.writeFile('writeMe.txt', data);
});

/*

// Synchronus way to handle files
// Read Files
var readMe = fs.readFileSync('Read.txt', 'utf8');
//console.log(readMe);


// Write Files
fs.writeFileSync('writeMe.txt', readMe);

*/