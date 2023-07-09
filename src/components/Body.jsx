import React, { useEffect, useState } from "react";
import RestaurantData from "../../RestaurantData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchRestaurants, setSearchRestaurants] = useState(RestaurantData);

  const handleSearch = () => {
    const restaurants = RestaurantData.filter((restaurant) =>
      restaurant?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchRestaurants(restaurants);
  };

  useEffect(() => {
    let debounceTimer;

    if (searchText) {
      debounceTimer = setTimeout(handleSearch, 300);
    } else {
      setSearchRestaurants(RestaurantData);
    }

    return () => clearTimeout(debounceTimer);
  }, [searchText]);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-restaurant"
          placeholder="Search Restaurant"
          name="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span style={{ marginLeft: "10px" }}>
          {searchRestaurants.length} Result(s)
        </span>
      </div>
      <div className="restaurant-container">
        {searchRestaurants.map((item) => (
          <RestaurantCard key={item.name} Restaurant={item} />
        ))}
      </div>
    </>
  );
};

export default Body;
