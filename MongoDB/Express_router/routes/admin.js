const express = require("express");
const router = express.Router();

// I can define middleware here in the routes
router.use((req, res, next) => {
    if (req.query.isAdmin) {
        // will only run if the query string isAdmin = true
        next();
    }
    res.send("SRY NOT AN ADMIN");
});

//every route in here will use the middleware
router.get("/topSecret", (req, res) => {
    res.send("This is top secret");
});

router.get("/deleteeverything", (req, res) => {
    res.send("DELETE ALL");
});
module.exports = router;
