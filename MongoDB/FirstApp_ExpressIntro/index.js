// This download does not include the node_modules folder
// REMEMBER TO RUN "npm install" first, to tell NPM to download the needed packages
const express = require("express");
const app = express(); // here we are executing express and saving its return to a variable 


/*
The method .use():
    - The .use() method works as: any time we habe an incomming request, this callback will run, does not matter where is the request is going to,
      for all request I will do the thing in the callback function. Everytime a request hits our server this method is activated.
    - For every incoming request we have access to 2 diferent parameters in this function that are automatically passed in. 
      The 1st one is an object that represents the request, the incoming request, and the 2nd  is a object representing the outgoing response. This are objects made by express, and passed into this callback 
        - Each HTTP request is not JS it is just text infom not particular to any programming languege. But, express turns it into a JS object that is passed in, in this case to a callback for use. 
            - Express automatically create these 2 objects (request and response) automatically for us by parging the incoming http request information, and than passes it in as the first argument of this callback
        - The respose object has method on it, including one called "res" or "response.send"
            res.send()  will send the http response, we canr esponde with a lot of formats,  string, a js object (that will turn that into JSON)


 */


// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     res.send('<h1>This is my webpage!</h1>')
// })



/*
.get() - Only matchs GET RESQUESTS
        Method expect two things:
            - the path that we are maching 
            - A callback function (like the uded in the .use() method). Whenever a request comes in maching the path, the function runs.
    Everytime we run res.send() we are done for that one request. We cant have more than one http request that gets more than one response

*/
app.get('/', (req, res) => {
    res.send('Welcome to the home page!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

/*
We can define a generic pattern, and the pattern will be something like:
    - /variable (A pattern that could be match).
We do it in the express by creating a path that inside the path string we actually use a colon ":" to designate something as a variable, or as a path variable 
We acssess the "variable" in the request object in the propertie  called params, where the variable neme will be the propertie and the value que typed path.
*/

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

/*
.post() - Only matchs POST RESQUESTS
        Method expect two things:
            - the path that we are maching 
            - A callback function (like the uded in the .use() method). Whenever a request comes in maching the path, the function runs.
    Everytime we run res.send() we are done for that one request. We cant have more than one http request that gets more than one response

*/


app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})

/*
Query String:
The Request oject has a particular property called Query, and in that proparty we'll find
*/

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    } else {
        res.send(`<h1>Search results for: ${q}</h1>`)
    }
})


// The * means that it is for everything, for evert path. It need to came at the end.
app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})




// /cats => 'meow'
// /dogs => 'woof'
// '/' 


// to start our server to listen the  incaming requests: we use this method and we provide a port that will going to listen on
app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})// this is only served locally on my machine, so I can send a request to chrome from safary or firefox, but you cant request this now. If you had the server running right now and you're on a diferent netword somewhere else on a digerent machine, you would not be abble to request this. It is running locally on my computer, and 
// we need to aknoledge the port number, and we need to go toa particlar place called "localhost", in the browser, that is a refernce to this machine, my local host, my local machine.Than we call the port selected e.g:
//      - localhost:8080
//  - the ports are like adress  for conections on your machine.
