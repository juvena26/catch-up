import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NewTodoForm } from "./Todo/NewTodoForm";
import { TodoList } from "./Todo/TodoList";
import Upcoming from "./Upcoming";
import { IoCalendar } from "react-icons/io5";
import { IoChatboxEllipses } from "react-icons/io5";
import Unread from "./Chat/Unread";
const LoginScreen = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  }); //hook to get todos list

  //store in local storage using useEffect hook
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addToDo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }
  function checkTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <div className="login-bg">
      <div className="login-bg-wrapper"></div>
      <div className="login-content">
        <h3 className="content-title">
          Upcoming Plans <IoCalendar />
        </h3>
        <div className="login-upcoming">
          <Upcoming />
        </div>
        <div className="row-content">
          <div className="login-todo">
            <h3 className="content-title">To Do</h3>
            <div className="todo-container">
              <div>
                <NewTodoForm onSubmit={addToDo} />
                <p className="todo-title">To do list</p>
                <TodoList
                  todos={todos}
                  checkTodo={checkTodo}
                  deleteTodo={deleteTodo}
                />
              </div>
            </div>
          </div>
          <div className="login-chat">
            <div>
              <h3 className="content-title">
                Chat Notifications{" "}
                <Link to="/chats">
                  <IoChatboxEllipses />
                </Link>
              </h3>
            </div>
            <div className="chat-container">
              <div className="unread-chats">
                <Unread />
              </div>
              <Link to="/chat" className="more">
                Go to Chat..
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
