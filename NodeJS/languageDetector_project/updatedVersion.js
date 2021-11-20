const franc = require("franc");
const langs = require('langs');
const input = process.argv // I just want the 3rd element
// as I just have one input I dont need to hiterate over my arguments
const langCode = franc(input);

if (langCode === "und") {
    console.log("SORRY ERROR")
} else {
    const language = langs.where("3", langCode)
    console.log(language.name)
}
