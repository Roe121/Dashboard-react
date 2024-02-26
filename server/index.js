const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ProductModel = require("./models/products");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/cruds")
  .then(() => {
    console.log("Connected to database");
    app.listen(3001, () => {
      console.log("Server is running on port 3001.");
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

  app.get('/getProducts', (req, res) => {
    ProductModel.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
})


app.post('/createProduct', async(req,res) => {
    const product = new ProductModel(req.body)
    try{
        await product.save()
        res.status(201).json({
            status: 'Success',
            data : {
                product
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})