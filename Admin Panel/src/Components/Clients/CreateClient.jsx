import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreateClient() {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [address, setAddress] = useState()
    const [age, setAge] = useState()
    const [gender, setGender] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/createClient', {firstName, lastName, email, phoneNumber, address, age, gender})
        .then(res => {
            console.log(res)
            navigate('/clients')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="w-100 bg-white rounded p-3">
            <form onSubmit={handleSubmit}>
                <h2>Ajouter un Client</h2>
                <div className="mb-2">
                    <label htmlFor="firstName">Prénom</label>
                    <input
                        type="text"
                        placeholder="Entrez le prénom"
                        className="form-control"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="lastName">Nom</label>
                    <input
                        type="text"
                        placeholder="Entrez le nom"
                        className="form-control"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Entrez l'email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="phoneNumber">Numéro de téléphone</label>
                    <input
                        type="tel"
                        placeholder="Entrez le numéro de téléphone"
                        className="form-control"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="address">Adresse</label>
                    <input
                        type="text"
                        placeholder="Entrez l'adresse"
                        className="form-control"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        placeholder="Entrez l'âge"
                        className="form-control"
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="gender">Genre</label>
                    <select
                        className="form-control"
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Sélectionnez le genre</option>
                        <option value="male">Masculin</option>
                        <option value="female">Féminin</option>
                        <option value="other">Autre</option>
                    </select>
                </div>
                <button className="btn btn-success">Soumettre</button>
            </form>
        </div>
    );
}

export default CreateClient;