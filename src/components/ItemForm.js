import React, { useState } from "react";
import { v4 as uuid } from "uuid"; // import uuid for unique IDs

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce"); // default category

  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem); // pass new item to parent
    setItemName(""); // clear form
    setItemCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <select 
        value={itemCategory}
        onChange={(e) => setItemCategory(e.target.value)}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
