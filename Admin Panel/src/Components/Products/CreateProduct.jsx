import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreateProduct() {

    const [name, setName] = useState()
    const [category, setCategory] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [stock, setStock] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/createProduct', {name, category, price, description, stock})
        .then(res => {
            console.log(res)
            navigate('/products')
        })
        .catch(err => console.log(err))
    }

  return (
    
      <div className="w-100 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Ajouter un Produit</h2>
          <div className="mb-2">
            <label htmlFor="">Nom</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Catégorie</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Prix</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Stock</label>
            <input
              type="number"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>

  );
}

export default CreateProduct;