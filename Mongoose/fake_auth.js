// using a middleware to fake a auth 
app.use((req, res, next) => {
    const { password } = req.query;
    if (password === "chickennugget") {
        next();
    }
    res.send("SRY you need a password");
});



// to protect the specific route I can use a get request and pass a callback function that runs as middleware


const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === "chickennugget") {
        next();
    }
    res.send("SRY you need a password");
}

app.get("/secret", verifyPassword, (req, res) =>{ // the req and res callback will only run if the function verifyPassword return next()
    res.send("This is a secret")
})