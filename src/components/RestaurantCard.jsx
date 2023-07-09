import React from "react";

function RestaurantCard({ Restaurant }) {
  const { image, name, cuisines, ratings } = Restaurant;
  return (
    <div className="restaurant-card">
      <img id="cardImage" src={image} alt={name} />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h4>{ratings} star(s)</h4>
    </div>
  );
}

export default RestaurantCard;
