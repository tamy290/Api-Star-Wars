import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Person() {
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const [homeworld, setHomeworld] = useState('');

    useEffect(() => {
        const fetchPerson = async () => {
            const response = await axios.get(`https://swapi.dev/api/${id}`);
            setPerson(response.data);
            const homeworldResponse = await axios.get(response.data.homeworld);
            setHomeworld(homeworldResponse.data.name);
        };

        fetchPerson();
    }, [id]);

    return (
        <div>
            {person && (
                <div>
                    <p>Nombre: {person.name}</p>
                    <p>Mundo natal: {homeworld}</p>
                </div>
            )}
        </div>
    );
}

export default Person;
