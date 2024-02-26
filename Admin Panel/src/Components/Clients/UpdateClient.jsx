import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateClient() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/getClient/" + id)
      .then((result) => {
        setFirstName(result.data.firstName);
        setLastName(result.data.lastName);
        setEmail(result.data.email);
        setPhoneNumber(result.data.phoneNumber);
        setAddress(result.data.address);
        setAge(result.data.age);
        setGender(result.data.gender);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateClient/" + id, {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        age,
        gender,
      })
      .then((result) => {
        console.log(result);
        navigate("/clients");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Mettre à jour un client</h2>
          <div className="mb-2">
            <label htmlFor="">Prénom</label>
            <input
              type="text"
              placeholder="Entrez le prénom"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Nom de famille</label>
            <input
              type="text"
              placeholder="Entrez le nom de famille"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Entrez l'email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Numéro de téléphone</label>
            <input
              type="text"
              placeholder="Entrez le numéro de téléphone"
              className="form-control"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Adresse</label>
            <input
              type="text"
              placeholder="Entrez l'adresse"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Âge</label>
            <input
              type="number"
              placeholder="Entrez l'âge"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Genre</label>
            <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Sélectionnez le genre</option>
              <option value="male">Homme</option>
              <option value="female">Femme</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <button className="btn btn-success">Mettre à jour</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateClient;
