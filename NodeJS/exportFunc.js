const square = x => x * x;

const sum = (x,y) => x + y;

const PI = 3.14159;

// to import this functions to other files to use

// this export method is clunky.... there is a better way, that we are going to see latter.
    // module.exports.sum = sum;
    // module.exports.square = square;
    // module.exports.PI = PI;


    //this is another way to export.
const math = {
    square: square,
    sum: sum,
    PI : PI
}
module.exports = math;


// or I cam use module.exports the time I'v created the func:
//  module.exports.sum = (x,y) => x + y; 

//*************
// a short cur is just export:
// exports.square = square

//*************