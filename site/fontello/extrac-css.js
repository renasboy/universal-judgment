var fs = require('fs');

// Clean the destination file
fs.truncate('app/css/_icon-fonts.scss', 0, function(){console.log('done')})


// Remove the 6 first lines
// Contrain font paths we don't need
fs.readFile('app/css/_icon-fonts-dirt.scss', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    for(i in array) {
        if (i > 7 ){
            fs.appendFileSync("./app/css/_icon-fonts.scss", array[i].toString() + "\n");
        }
    }
});
