import React from 'react';
import Task from './Task';
import { DragDropContext } from 'react-beautiful-dnd';

export default function Tasks({taskList, setTaskList}) {
  return (
    <div>
      {taskList.map((task, index) =>(
        <div key={index}><Task task={task} taskList={taskList} setTaskList={setTaskList} /></div>
      ))}
    </div>
  )
}


