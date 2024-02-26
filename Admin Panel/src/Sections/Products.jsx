import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


function Products() {

  const products = [
    {
      _id: 1,
      name: "Produit 1",
      category: "Catégorie 1",
      price: 20.99,
      description: "Description du produit 1",
      stock: 100,
    },
    {
      _id: 2,
      name: "Produit 2",
      category: "Catégorie 2",
      price: 25.99,
      description: "Description du produit 2",
      stock: 50,
    },
  ];
  
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
                  return <tr>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.price}</td>
                      <td>{product.description}</td>
                      <td>{product.stock}</td>
                      <td>
                          <Link to="/" className="btn btn-sm btn-success me-2">Update</Link>
                          <button className="btn btn-sm btn-danger">Delete</button>
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