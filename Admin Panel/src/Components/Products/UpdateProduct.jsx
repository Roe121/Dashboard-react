import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate()


  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [stock, setStock] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getProduct/" + id)
      .then((result) => {
        setName(result.data.name);
        setCategory(result.data.category);
        setPrice(result.data.price);
        setDescription(result.data.description);
        setStock(result.data.stock);
      })
      .catch((err) => consol.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateProduct/" + id, {
        name,
        category,
        price,
        description,
        stock,
      })
      .then((result) => {
        console.log(result)
        navigate("/Products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Mettre a jour un produit</h2>
          <div className="mb-2">
            <label htmlFor="">Nom</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Catégorie</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Prix</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Stock</label>
            <input
              type="number"
              placeholder="Enter Age"
              className="form-control"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
