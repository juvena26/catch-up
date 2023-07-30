import Delete from "../../images/delete.svg";
export function TodoItem(completed, id, title, checkTodo, deleteTodo) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => checkTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        //passing the function (() => fxn )
        //passing the result of the fxn (fxn)
        onClick={() => deleteTodo(id)}
        htmlFor="delete"
        className="delete-btn"
      >
        <img id="delete" src={Delete} alt="delete" />
      </button>
    </li>
  );
}
