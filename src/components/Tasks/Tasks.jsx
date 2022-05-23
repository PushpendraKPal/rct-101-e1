import React from "react";
import styles from "./tasks.module.css";
import data from "../../data/tasks.json";
import Counter from "../Counter/Counter";

const Tasks = () => {
  // NOTE: do not delete `data-cy` key value pair

  let handleDone = (e)=>{
    e.status = false;
  }
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>

        {data.forEach(e=>{
          return <li>
            <button onClick={(e)=>{handleDone()}}>Done</button>
            <p>{e.text}</p>
            <Counter count={e.count}/>
          </li>
        })}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
       <p>There is no more tasks</p>
      </div>
    </>
  );
};

export default Tasks;
