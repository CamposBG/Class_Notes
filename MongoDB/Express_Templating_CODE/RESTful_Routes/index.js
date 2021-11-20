const express = require("express");
const app = express();
const path = require ("path");
const { v4: uuid } = require('uuid');// package to create unique IDs
// every time I call uuid I will get a new universally unique ID
const methodOverride = require("method-override") // to use patch request in via HTML


app.use(express.urlencoded({extended: true})) // we use this code to parse the data  as URL encoded data, on the post request. See comment #2. This just work for form data
app.use(express.json())// here we are parsing json data

//setting the ejs path and views folder
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(methodOverride("_method"))//we provide the string that we are looking for in the query string and 


//fake comments data
let comments = [
    {   id: uuid(),
        username: "Éomer",
        comment: "I would cut off your head, Dwarf, if it stood but a little higher from the ground.",
    },

    {   id: uuid(),
        username: "Gandalf",
        comment: "Fool of a Took! Throw yourself in next time and rid us of your stupidity!"
    },

    {   id: uuid(),
        username: "BBaggins",
        comment: "I don't know half of you half as well as I should like... and I like less than half of you half as well as you deserve."
    },

    {   id: uuid(),
        username: "Mary",
        comment: "Anyways, you need people of intelligence on this sort of... mission... quest ... thing. Well, that rules you out."
    }
]

//Render all the comments in a template:
//Set up my route /comments will be the base path, the base URL for this resource
app.get("/comments", (req,res) =>{
    res.render("comments/index", {comments}) //I can call it other thing instead of index, such as "allComments". The goal is to show all of a certain resource (not literally all at once), we usually use Index for that 
})



// to create a "new comment" we need to set up two routes, one to serve the form itself (just to give the form for the user), which will be the new route(comment/new), and we will render a form. And when we submit the form, it sends the data as a POST request to a different path where it's processed and it's added into our comments array (database)  
app.get("/comments/new",(req, res) => {
    res.render("comments/new")
})
// This is our post route where the form submits its data to. 
app.post("/comments", (req, res) => {
    const {username, comment} = req.body
    comments.push({username, comment, id: uuid()})
    res.redirect("/comments");// by specifying a path ans using  the method redirect, the response that is generated will include a redirect status  code (302). And then the response also will include this path under the location header, which your browser will than use to automatically make a new request to such comment in this case.
})



//lets define a route that matches that pattern for our comment, it's going to be a get request
app.get("/comments/:id", (req, res) => {
     const {id} = req.params; // taking the id from the URL
     const comment = comments.find( c => c.id === id)// find the correct post based in the id
     res.render("comments/show", {comment})// Render some page to show the specific comment,and we are passing the comment variable for the ejs file
    })



//lets make a route to serve the form with for update the comment.
app.get("/comments/:id/edit", (req, res) => {
    const {id} = req.params;
    const comment = comments.find( c => c.id === id);
    res.render("comments/edit", {comment})// the comment to populate the form
})

//lets set up a route to update our comments. Such as a post request the pacth request have a body request that we can access in our express route
app.patch("/comments/:id", (req, res) => {
    const {id} = req.params;// take the id
    const newCommentText = req.body.comment;
    const foundComment = comments.find( c => c.id === id) // find the comment, to update it based upon some payload that was sent in the request body
    foundComment.comment = newCommentText
    res.redirect("/comments")
})
 //Route to delete
 app.delete("/comments/:id", (req, res) => {
    const {id} = req.params; // get the ID
    comments = comments.filter( c => c.id !== id)// creates a new array by filtering the comments into a new array without the comment with the selected 
    res.redirect("/comments")


})

app.get("/tacos", (req, res) => {
    res.send("GET / tacos response")
})




app.post("/tacos", (req, res) => { // #2 this request object has a property called "req.body" that we can use to send data in different formats, we need to say explicitly how to parse this data, we do it in the .use
    const {meat, qty} = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`);

})


app.listen(3000, () => {
    console.log("ON PORT 3000")
})



