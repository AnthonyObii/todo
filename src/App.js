import { useState } from 'react';
import './App.css';
import {Task} from "./Task"


function App(){
  const [todoList,setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("")
  const handleChange = (event) => {
     setNewTask(event.target.value);
  };
  
const addTask = () => {
  const task ={
    id: todoList.length === 0 ? 1 :[todoList.length + 1],
    taskName: newTask
  }
 setTodoList([...todoList, task]);
};

const deleteTask = (id) => {
setTodoList(todoList.filter((task) => task.id !== id ));
} ;

  return (
  <div className='App'>
  <h1>Todolist</h1>
    <div className="addTask">
      <input onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
    </div>
    <div className="list"></div>
    {todoList.map((task) =>{
     return <Task taskName={task.taskName} id={task.id} deleteTask= {deleteTask}/>;
    })}
  </div>
  );
}


export default App;
