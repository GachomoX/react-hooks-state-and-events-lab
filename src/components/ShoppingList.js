import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [selectedCategory, setCategory] = useState("All")

  function handleCategory(event) {
    setCategory(event.target.value)
  }

    const selectedItems = items.filter((newItems) => {
     if (selectedCategory === "All") {
       return true
     }
       return newItems.category === selectedCategory
    })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
