import React from 'react';
import Task from './Task';

export default function Tasks({taskList}) {
  return (
    <div>
      {taskList.map((task, index) =>(
        <div key={index}><Task task={task}/></div>
      ))}
    </div>
  )
}


