import React, { useState } from "react";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import ShoppingList from "./ShoppingList";
import { v4 as uuid } from "uuid"; // import UUID for unique IDs

function App() {
  const [items, setItems] = useState([]); // state for items
  const [search, setSearch] = useState(""); // state for search input

  // Function to handle adding a new item
  function handleAddItem(newItem) {
    setItems([...items, newItem]); // add new item to the list
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      
      {/* Search filter input */}
      <Filter search={search} onSearchChange={setSearch} />

      {/* Form to add new items */}
      <ItemForm onItemFormSubmit={handleAddItem} />

      {/* Display filtered shopping list */}
      <ShoppingList items={items} search={search} />
    </div>
  );
}

export default App;
