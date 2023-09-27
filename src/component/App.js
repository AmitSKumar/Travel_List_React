import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import { Stats } from "./Stats";
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      //change packed property of Array
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItem() {
    // ask user to confirm below method retur true or false
    const confirmed = window.confirm("Are you sure you want to delete items");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form OnAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        OnToggleItem={handleToggleItem}
        onClearItem={handleClearItem}
      />
      <Stats items={items} />
    </div>
  );
}
