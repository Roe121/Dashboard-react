const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ProductModel = require("./models/products");
const ClientModel = require("./models/clients");

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


  // Product API handlers --------------------------------------



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


app.delete('/deleteProduct/:id', (req, res) => {
  const id = req.params.id;
  ProductModel.findByIdAndDelete({_id: id})
  .then(response => res.json(response))
  .catch(err => res.json(err))
})

// Endpoint pour récupérer le nombre total de produits
app.get('/getTotalProducts', async (req, res) => {
  try {
    const totalProducts = await ProductModel.countDocuments({});
    res.json({ totalProducts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});





// Clients API handlers --------------------------------------



app.post('/createClient', async(req,res) => {
  const client = new ClientModel(req.body)
  try{
      await client.save()
      res.status(201).json({
          status: 'Success',
          data : {
              client
          }
      })
  }catch(err){
      res.status(500).json({
          status: 'Failed',
          message : err
      })
  }
})

app.get('/getClients', (req, res) => {
  ClientModel.find()
  .then(clients => res.json(clients))
  .catch(err => res.json(err))
})

app.get('/getClient/:id', (req, res) => {
  const id = req.params.id;
  ClientModel.findById({_id:id})
  .then(clients => res.json(clients))
  .catch(err => res.json(err))
})

app.put('/updateClient/:id', (req, res) => {
  const id = req.params.id;
  ClientModel.findByIdAndUpdate({_id: id}, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    age: req.body.age,
    gender: req.body.gender,

  }).then(products => res.json(products))
  .catch(err => res.json(err))
})


app.delete('/deleteClient/:id', (req, res) => {
  const id = req.params.id;
  ClientModel.findByIdAndDelete({_id: id})
  .then(response => res.json(response))
  .catch(err => res.json(err))
})

app.get('/getTotalClients', async (req, res) => {
  try {
    const totalClients = await ClientModel.countDocuments({});
    res.json({ totalClients });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
