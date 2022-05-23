import React from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  const [query, setQuery] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  let handleChange = (e)=>{
    let value = e.target;
    setQuery(value);
  }

  let addTask = ()=>{
    let payload = {
      text : query,
      done :false
    }

    setTasks([...tasks, payload]);
  }

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={query} onChange={handleChange} placeholder="Enter task"/>
      <button data-cy="add-task-button" onClick={addTask}>Add</button>
    </div>
  );
};

export default AddTask;
