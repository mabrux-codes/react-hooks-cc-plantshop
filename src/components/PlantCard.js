import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleSoldOutClick() {
    setIsSoldOut((prev) => !prev);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    }).then(() => onDeletePlant(plant.id));
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className={isSoldOut ? "" : "primary"} onClick={handleSoldOutClick}>
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default PlantCard;
