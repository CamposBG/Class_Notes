const express = require("express");
//import express from "express"; // newer way to import express
const app = express();
const path = require("path");
//import { join } from "path"; // import just the join method
const mongoose = require("mongoose");
const methodOverride = require("method-override")

let Product = require("./models/product.js");

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{ // then for the resolver part of the promise
        console.log("MONGO CONNECTION OPEN")
    })
    .catch (err => { // catch for the reject part of the promise
    console.log("MONGO CONNECTION ERROR!")
        console.log(err)
    })

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true})) //#1
app.use(methodOverride("_method"))

// for selection in the edit and new
const categories = ["fruit", "vegetable", "dairy"]

//this async root handler where we await some mongoose operation will be used all the time
app.get("/products", async (req, res) => {
    const {category} = req.query; //get the query value 
    if (category) {
        const products = await Product.find({category})// or find({category:category})
        res.render("products/index", {products,category})
    } else {
        const products = await Product.find({})
        res.render("products/index", {products, category:"all"})
    }
    const products = await Product.find({})

})

//Adding new products, so we need a form and a rout to submit the forms to
//this  route serve the form
app.get("/products/new",(req, res) =>{
    res.render("products/new", {categories})
})

// set up the route where the submits to
app.post("/products", async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`)
    
})//we dont have access to the response body immediately. We need to tell express to use middleware (see comment #1)


// route for details
app.get("/products/:id", async (req, res) =>{
    const {id} = req.params //getting the id
    const product = await Product.findById(id);
    console.log(product)
    res.render("products/show", {product})
})

//update route
app.get("/products/:id/edit", async (req, res) =>{
    const {id} = req.params 
    const product = await Product.findById(id);
    res.render("products/edit", {product, categories})
})
app.put("/products/:id", async (req, res) =>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators:true, new: true})
    res.redirect(`/products/${product._id}`);
})

//route for delete
app.delete("/products/:id", async (req, res) =>{
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id) ;
    res.redirect("/products");
})

app.listen(3000, () =>{
    console.log ("APP IS LISTENING ON PORT 3000")
})