const express = require("express");
// const { builtinModules } = require("module")

// this func creates the router obj. In this case I created an empty router
const router = express.Router();

/* now we added 4 different routes for the router we created above. 
We add all of the routes we want for this router (shelter routes in our case)*/
router.get("/", (req, res) => {
    res.send("ALL SHELTER");
});

router.post("/", (req, res) => {
    res.send("Creating Shelter");
});

router.get("/:id", (req, res) => {
    res.send("View One Shelter");
});

router.get("/:id/edit", (req, res) => {
    res.send("Editing one shelter");
});

module.exports = router;
