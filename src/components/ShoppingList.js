function ShoppingList({ items, search }) {
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name} - {item.category}</li>
      ))}
    </ul>
  );
}
