import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card">
      <h2>Detalles</h2>
      <p><strong>Nombre:</strong> {data.name}</p>
      <p><strong>Tipo:</strong> {data.type}</p>
    </div>
  );
};

export default Card;


