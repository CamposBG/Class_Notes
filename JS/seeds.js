//Here I have no webApp involved, no server, no express. This is a file I will run on it's own any time, I just want to get some new data in my database.
// For development purpose it is very common to seed your database separately from a Web app.

//require the product model:
const Product = require("./models/product.js");

// connect to mongoose
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{ // then for the resolver part of the promise
        console.log("MONGO CONNECTION OPEN")
    })
    .catch (err => { // catch for the reject part of the promise
        console.log("MONGO CONNECTION ERROR!")
        console.log(err)
    })

// Adding products

// const p = new Product ({
//     name: "Ruby Grapefruit",
//     price: 1.99,
//     category: "fruit",
// })
// p.save().then(p => {
//     console.log(p)
// })
// .catch(e => {
//     console.log(e)
// })

const seedProducts = [
    {
         name:"Fairy Eggplant",
         price: 1.00,
         category: "vegetable",       
    },
    {
         name:"Organic Goddess Mellon",
         price: 4.99,
         category: "fruit",   
    },
    {
          name:"Organic Mini Seedless Watermelon",
          price: 3.99,
          category: "fruit",  
    },
    {
          name:"Chocolate Whole Milk",
          price: 2.69,
          category: "dairy",  
    }
]

Product.insertMany(seedProducts)// if anything does not pass validation, noting will be inserted 
.then(res => console.log(res))
.catch(err => console.log(err))