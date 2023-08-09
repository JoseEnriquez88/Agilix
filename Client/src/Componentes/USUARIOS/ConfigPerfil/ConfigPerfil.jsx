import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchClientes,
  getClientsByName,
  getClientByEmail,
  getClientById,
  putClient,
} from "../../../Redux/clientesSlice"; 

function TestComponent() {
  const dispatch = useDispatch();
  const { loading, allClientes, clientById, error } = useSelector(
    (state) => state.clientes
  );

  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [clientId, setClientId] = useState("");
  const [clientUpdate, setClientUpdate] = useState({}); 

  const handleFetchClientes = () => {
    dispatch(fetchClientes());
  };

  const handleSearchByName = () => {
    dispatch(getClientsByName(searchName));
  };

  const handleSearchByEmail = () => {
    dispatch(getClientByEmail(searchEmail));
  };

  const handleSearchById = () => {
    dispatch(getClientById(clientId));
  };

  const handleUpdateClient = () => {
    dispatch(putClient(clientId, clientUpdate));
  };

  return (
    <div>
      <h2>Test Component</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <button onClick={handleFetchClientes}>Fetch All Clients</button>
      {allClientes.map((client) => (
            <li key={client.id}>
              <strong>Name:</strong> {client.nombre} <br />
              <strong>Email:</strong> {client.email} <br />
              <strong>Phone:</strong> {client.telefono}
            </li>
          ))}
      <div>
        <h3>Search by Name</h3>
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button onClick={handleSearchByName}>Search</button>
      </div>
      <div>
        <h3>Search by Email</h3>
        <input
          type="text"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
        />
        <button onClick={handleSearchByEmail}>Search</button>
      </div>
      <div>
        <h3>Search by ID</h3>
        <input
          type="text"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
        />
        <button onClick={handleSearchById}>Search</button>
      </div>
      <div>
        <h3>Update Client</h3>
        {/* Define inputs to update client data */}
        <button onClick={handleUpdateClient}>Update</button>
      </div>
      <div>
        <h3>All Clients</h3>
        <ul>
          {allClientes.map((client) => (
            <li key={client.id}>{client.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Client by ID</h3>
        <p>Name: {clientById.nombre}</p>
        <p>Email: {clientById.email}</p>
        <p>telefono:{clientById.telefono}</p>
      </div>
    </div>
  );
}

export default TestComponent;