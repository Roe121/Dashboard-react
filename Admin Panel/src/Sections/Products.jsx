import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Products() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3001/getProducts')
    .then(result => {
    console.log(result.data)
    setProducts(result.data)
  })
    .catch(err => console.log(err))
  },[])


  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteProduct/" + id )
      .then((result) => {
        console.log(result)
        navigate("/Products");
      })
      .catch((err) => console.log(err));
  };
  
return (
  
    <div className="w-100 bg-white rounded p-3">
      <Link to="/createProduct" className="btn btn-success btn-sm">
        Add +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Categorie</th>
            <th>Prix</th>
            <th>Description</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {
              products.map(product => {
                  return <tr key={product._id}>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.price}</td>
                      <td>{product.description}</td>
                      <td>{product.stock}</td>
                      <td>
                          <Link to={`/UpdateProduct/${product._id}`} className="btn btn-sm btn-success me-2">Update</Link>
                          <button className="btn btn-sm btn-danger"
                          onClick={handleDelete(product._id)}
                          >Delete</button>
                      </td>
                  </tr>
              })
          }
        </tbody>
      </table>
    </div>
);
}

export default Products;