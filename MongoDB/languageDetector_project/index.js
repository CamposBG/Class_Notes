var franc = require('franc')
var langs = require('langs');

const args = process.argv // slice will remove the first two elements that process.argv always return, the path thing 
for (let arg of args){
   const code =  franc(arg)
   if (code === "und" || code === "blc" || code === "min" || code === "src") {
       console.log("ERROR!!! > unnable to identify the language")
   } else {
    const language = langs.where("3", code)
    console.log(language.name)
   }
}




