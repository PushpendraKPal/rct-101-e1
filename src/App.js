import React from "react";
import Counter from "./components/Counter/Counter";
import TaskHeader from "./components/TaskHeader/TaskHeader";
import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/AddTask/AddTask";

function App() {
  return (
  <div>
    <>
    <Counter count={1}/>
    <TaskHeader/>
    <AddTask className = "m50"/>
    <Tasks />
    

    </>
  </div>
 );
}

export default App;
