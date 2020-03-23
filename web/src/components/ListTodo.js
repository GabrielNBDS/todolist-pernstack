import React, { useState, useEffect } from "react";

import EditTodo from "./EditTodo";

export default function ListTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    const res = await fetch("http://localhost:4000/todos");

    const todoArray = await res.json();

    setTodos(todoArray);
  }

  async function deleteTodo(id) {
    try {
      await fetch(`http://localhost:4000/todos/${id}`, { method: "DELETE" });
      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><EditTodo todo={todo}/></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
