import React from 'react';
import TaskCardDeleteButton from './button/TaskCardDeleteButton';
import TaskAddInput from './input/TaskAddInput';
import TaskCardTitle from './TaskCardTitle';
import Tasks from './Tasks';


function TaskCard() {
  return (
    <div className="taskCard">
      <TaskCardTitle/>
      <TaskCardDeleteButton />
      <TaskAddInput />
      <Tasks />
    </div>
  )
}

export default TaskCard
