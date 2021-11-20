const mongoose = require("mongoose")// I dont need to conect mongoose here, because the connection will be made by the index.js file

// making the schema
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min:0
    },
    category: {
        type: String,
        lowercase: true, // to prevent us to enter Fruit instead of fruit, for instance
        enum: ["fruit", "vegetable", "dairy"]
    }
})

//compile our model
const Product = mongoose.model("Product", productSchema)

// export the file
module.exports = Product;