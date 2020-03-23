import React, { useState } from "react";

export default function InputTodo() {
  const [description, setDescription] = useState("");

  const HandleSubmit = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(response);

      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <h1 className="my-5">Input Todo</h1>
      <form className="d-flex" onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
}
