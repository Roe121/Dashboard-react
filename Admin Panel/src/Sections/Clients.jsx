import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";


function Clients() {

  const [clients, setClients] = useState([]);
  const navigate = useNavigate()


  useEffect(()=>{
    axios.get('http://localhost:3001/getClients')
    .then(result => {
    console.log(result.data)
    setClients(result.data)
  })
    .catch(err => console.log(err))
  },[])


  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteClient/" + id )
      .then((result) => {
        console.log(result)
        window.location.reload()
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div className="w-100 bg-white rounded p-3">
        <Link to="/createClient" className="btn btn-success btn-sm">
            Ajouter +
        </Link>
        <table className="table">
            <thead>
                <tr>
                    <th>Prénom</th>
                    <th>Nom de famille</th>
                    <th>Email</th>
                    <th>Numéro de téléphone</th>
                    <th>Adresse</th>
                    <th>Âge</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client) => (
                    <tr key={client._id}>
                        <td>{client.firstName}</td>
                        <td>{client.lastName}</td>
                        <td>{client.email}</td>
                        <td>{client.phoneNumber}</td>
                        <td>{client.address}</td>
                        <td>{client.age}</td>
                        <td>{client.gender}</td>
                        <td>
                            <Link to={`/updateClient/${client._id}`} className="btn btn-sm btn-success me-2">
                                Mettre à jour
                            </Link>
                            <button className="btn btn-sm btn-danger" onClick={(e) => handleDelete(client._id)}>
                                Supprimer
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
}

export default Clients;