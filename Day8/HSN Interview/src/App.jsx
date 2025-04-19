import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState({ Task: " ", Status: " ", Priority: " " });
  const [todo, setTodo] = useState([]);

  function handlChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodo((prev) => [...prev, data]);
    setData({ Task: " ", Status: " ", Priority: " " });
  }
  console.log(todo);

  return (
    <>
      <form action="" onSubmit={handleSubmit} className="colour-black">
        <input
          value={data.Task}
          type="text"
          placeholder=" add Task"
          name="Task"
          onChange={handlChange}
        />
        <select value={data.Status} name="Status" id="" onChange={handlChange}>
          <option value="">Choose status</option>
          <option value="Complete">Complete</option>
          <option value="Pending">Pending</option>
          <option value="Inprogress">Inprogress</option>
        </select>
        <select
          value={data.Priority}
          name="Priority"
          id=""
          onChange={handlChange}
        >
          <option value="">select priority</option>
          <option value="High">High</option>
          <option value="Low">Low</option>
          <option value="Mid">Mid</option>
        </select>
        <button type="Submit">Add</button>
      </form>

      <table className="table-auto">
        <thead className="border-inherit">
          <tr>
            <th>id</th>
            <th>Task</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        {todo.map((ele, ind) => (
          // <div  className="flex flex-row space-x-4">
            <tbody key={ind}>
              <td>{ind + 1}</td>
              <td>{ele.Task}</td>
              <td>{ele.Priority}</td>
              <td>{ele.Status}</td>
            </tbody>
          // </div>
        ))}
      </table>
    </>
  );
}

export default App;
