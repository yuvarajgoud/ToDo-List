import { useState } from 'react'
import './App.css'
import Task from './Task';

function App() {
  const [todo,setTodo] = useState([]);
  const [newTask,setNewTask]=useState("");
  

  const handleChange = (event)=> {
      setNewTask(event.target.value);
  };

  const addTask = () => {
      const task ={
        id:todo.length===0 ? 1 :todo[todo.length-1].id +1,
        isCompleted:false,
        taskName:newTask,
      };
      setTodo([...todo,task]);
  };
  
  const deleteTask = (id) => {
      const newTodo = todo.filter((task) => task.id!=id);

      setTodo(newTodo);
  }
  const handleComplete = (itemId) => {
    // Find the task by its ID and toggle the isCompleted state
    const updatedToDoList = todo.map((item) =>
      item.id === itemId ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodo(updatedToDoList);
  };
  return (
    <>
      <div className='App'>
        <div className='addTask'>
          <input type="text" onChange={handleChange}/>
          <button onClick={addTask}>AddTask</button>
        </div>
        <div className='list'>
          {
            todo.map( (task,key) => {
              return (
                <Task taskName={task.taskName} id={task.id} isCompleted={task.isCompleted} handleComplete={handleComplete} deleteTask={deleteTask}/>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
export default App
