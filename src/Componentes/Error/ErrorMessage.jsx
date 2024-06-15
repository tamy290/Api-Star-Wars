import React from 'react';
import obiWanImage from '../Img/obi-wan.jpg';

function ErrorMessage({ error }) {
  return (
    <div>
      <p>{error}</p>
      <img src={obiWanImage} alt="Obi-Wan" />
    </div>
  );
}

export default ErrorMessage;
