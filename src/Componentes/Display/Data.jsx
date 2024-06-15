import React from 'react';

function Data({ data }) {
    return (
        <div>
            <p>Nombre: {data.name}</p>
            <p>Altura: {data.height}</p>
            <p>Peso: {data.mass}</p>
            <p>Color de pelo: {data.hair_color}</p>
        </div>
    );
}

export default Data;
