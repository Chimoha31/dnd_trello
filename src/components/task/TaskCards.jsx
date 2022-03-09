import React from 'react';
import TaskCard from './TaskCard';
import AddTaskCardButton from './button/AddTaskCardButton';

function TaskCards() {
  return (
    <div>
      <TaskCard />
      <AddTaskCardButton />
    </div>
  )
}

export default TaskCards;
