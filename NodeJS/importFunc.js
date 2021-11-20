const math = require("./exportFunc");
//if I just wat one function I can destruct such as:
// const {square} = require("./exportFunc");

/*
we can require an entire directory:
    For that each file in the directory must have an module.exports, in addition in the directory I need to create an "index.js" file to link all the other files.
    inside the index.js I need to require all the objects from the other files, and combine it to an array
        e.g
            const martin = require ("./martin")      
            const igrit = require ("./igrit")      
            const ruffus = require ("./ruffus")      

            const allcats = [martin, igrit, ruffus]
            
            module.exports = allCats;

    Outside this directory, I can call this directory as:
        const cats = require("./directoryName")
*/

console.log(math.PI);
console.log(math.square(3));
console.log(math.sum(2,2));
