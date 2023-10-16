import React from 'react'
import { useState } from 'react';
function Task(props) {
  return (
    <div className="task">
      <input type="checkbox" name="" id="" checked={props.isCompleted}/>
      <h1><span style={{ textDecoration: props.isCompleted ? 'line-through' : 'none' }}>
        {props.taskName}
      </span></h1>
      <button onClick={() => props.handleComplete(props.id)}>Completed</button>
      <button onClick={() => props.deleteTask(props.id)}>Delete</button>
      </div>
  )
}

export default Task