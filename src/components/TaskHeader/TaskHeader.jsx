import React from "react";
import styles from "./taskHeader.module.css";
import data from "../../data/tasks.json";

const TaskHeader = () => {
  function un(data){
    let a=0;
    data.forEach(e => {
      if(e.done === false)
      a++
    });
    return a;
  }
  // sample values to be replaced

  let totalTask = data.length;
  let unCompletedTask = un(data);

  


  const [tasksCount, setTasksCount] = React.useState(totalTask);
  const [unComTasks, setUnComTasks] = React.useState(unCompletedTask);

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>ToDo App</h1>
      <p>
      <b data-cy="header-remaining-task">{unComTasks}</b><br/>
       remaining from<br></br>
      <b data-cy="header-total-task">{tasksCount}</b><br/>
       Tasks
      </p>
    </div>
  )
};

export default TaskHeader;
