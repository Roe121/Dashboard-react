const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ProductModel = require("./models/products");

const app = express();
app.use(cors());
app.use(express.json());


// Database / express serers connections
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


  // API handlers --------------------------------------



  app.get('/getProducts', (req, res) => {
    ProductModel.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.get('/getProduct/:id', (req, res) => {
  const id = req.params.id;
  ProductModel.findById({_id:id})
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

app.put('/updateProduct/:id', (req, res) => {
  const id = req.params.id;
  ProductModel.findByIdAndUpdate({_id: id}, {
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock,

  }).then(products => res.json(products))
  .catch(err => res.json(err))
})