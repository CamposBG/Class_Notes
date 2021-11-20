const express = require("express");
const app = express();

//require the routes created in the shelter.js file
const shelterRoutes = require("./routes/shelters");
const dogRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin");

// now we need to tell express to use the created routes. we need to specify the path the prefix of all of the routes we've predefined in that router. Inn our case all routes has "/shelters" written in the path
app.use("/shelters", shelterRoutes);
app.use("/dogs", dogRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
    console.log("Serving app on localhost:3000");
});
