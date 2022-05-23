import React from "react";
import styles from "./counter.module.css";

const Counter = (props) => {
  // sample value to be replaced
  let count = props.count;
  // NOTE: do not delete `data-cy` key value pair
  const [counter, setCounter] = React.useState(count);

  return (
    <div className={styles.counter}>

      <button data-cy="task-counter-increment-button" onClick={()=>{setCounter(counter+1)}}>++</button>
      <p><span data-cy="task-counter-value">{counter}</span></p>
      <button data-cy="task-counter-decrement-button" onClick={()=>{counter<=0?setCounter(0): setCounter(counter-1)}}>--</button>
    </div>
  );
};

export default Counter;
