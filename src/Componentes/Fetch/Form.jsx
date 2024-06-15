import React, { useState } from 'react';
import axios from 'axios';

function FetchForm({ onFetchData }) {
    const [resource, setResource] = useState('people');
    const [id, setId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://swapi.dev/api/${resource}/${id}`);
            onFetchData(response.data, null);
        } catch (error) {
            onFetchData(null, 'Estos no son los droides que está buscando');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Recurso:
                <select value={resource} onChange={(e) => setResource(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
            </label>
            <label>
                ID:
                <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
            </label>
            <button type="submit">Buscar</button>
        </form>
    );
}

export default FetchForm;
