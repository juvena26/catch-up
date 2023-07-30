import { useState } from "react";
import AddToList from "../../images/addTolist.svg";
export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState(" ");
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === " ") return;
    onSubmit(newItem);
    setNewItem(" ");
  }
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <label htmlFor="item">New item</label>
      <div className="add-new">
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />

        <div className="add-btn">
          <button htmlFor="add" className="add-btn">
            {" "}
            <img id="add" src={AddToList} alt="delete" />
          </button>
        </div>
      </div>
    </form>
  );
}
