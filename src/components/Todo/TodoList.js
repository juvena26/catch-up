import Delete from "../../images/delete.svg";
export function TodoList({ todos, checkTodo, deleteTodo }) {
  return (
    <div className="todo-list">
      <ul>
        {todos.length === 0 && "You have no ToDos :)"}
        {/* curly braces to run as javascript code */}
        {todos.map((todo) => {
          return (
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => checkTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                //passing the function (() => fxn )
                //passing the result of the fxn (fxn)
                onClick={() => deleteTodo(todo.id)}
                htmlFor="delete"
                className="delete-btn"
              >
                <img id="delete" src={Delete} alt="delete" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
