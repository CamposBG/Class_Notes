// const express = require('express');
// const app = express();
// const path = require('path');
// const redditData = require('./data.json');

// app.use(express.static(path.join(__dirname, 'public')))

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/views'))

// app.get('/', (req, res) => {
//     res.render('home')
// })

// app.get('/cats', (req, res) => {
//     const cats = [
//         'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
//     ]
//     res.render('cats', { cats })
// })

// app.get('/r/:subreddit', (req, res) => {
//     const { subreddit } = req.params;
//     const data = redditData[subreddit];
//     if (data) {
//         res.render('subreddit', { ...data });
//     } else {
//         res.render('notfound', { subreddit })
//     }
// })

// app.get('/rand', (req, res) => {
//     const num = Math.floor(Math.random() * 10) + 1;
//     res.render('random', { num })
// })

// app.listen(3000, () => {
//     console.log("LISTENING ON PORT 3000")
// })

const express = require ("express");
const app = express();
const path = require ("path");
const redditData = require ("./data.json")

//to serve a static file such as css, or js files that we want to include in the response back to the client side we use express.static. this is the case for imgs, fonts, logos, etc
app.use(express.static(path.join(__dirname, "public")))// here I pass the directory of the file, the directory must be in the root directory of our application
// now I can refer to this stile file inside ine of my templates 




app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/", (req,res) => {
    res.render("home");
})

app.get("/r/:subreddit", (req, res) =>{
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    console.log(data)
    res.render("subreddit", {...data})
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})