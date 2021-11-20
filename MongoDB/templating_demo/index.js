const express = require("express");
const app = express();
const path = require("path"); // this is included in the express, and it is necessary to the comment #2



// to make the app use EJS we use the method .set() that recives two arguments, the key that we want to set and the corresponding value are the poperty and its value
app.set("view engine", "ejs") // next thing is to npm install ejs, and by setting view engine to EJS we dont need to requirer 
//by default Engine express is going to assume that our views are templates that exists in a directory called views. So i need to create this directory, and inside of views I create a file nemed "home.ejs"
// the es file accepts html syntax and more



app.set("views", path.join(__dirname, "/views") )//#2 this is necessary to access the file from diferent directories  outise "templating_demo"
// this way I can run as: nodemon templating_demo/index.js 



app.get("/",(req, res)=> {
    res.render("home.ejs") // here I can send a file, a template, and the method we use for it is called render. By default it will look at the views folder. Here I'm taking my current directory name "__dirname" and I'm joing that path to "/views". SO instead of executing from the current directory it executes from the directory name where index.js is located
})

app.get("/rand", (req, res) =>{
    let randNum = Math.floor(Math.random()*10) + 1
    res.render("random", {rand: randNum})// I can pass here the rand for my ejs file
})


app.get("/cats", (req, res) => {
    const cats = [
        "Martin",
        "Ruffus",
        "Igrit"
    ]
    res.render ("cats", {cats}) // is the same of {cats:cats}
})


app.listen(3000,() => {
    console.log("LISTENING ON PORT 3000")
})