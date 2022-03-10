import React, { useState } from "react";
import TaskCard from "./TaskCard";
import AddTaskCardButton from "./button/AddTaskCardButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function TaskCards() {
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: "0",
      draggableId: "item0",
    },
  ]);

  return (
    <DragDropContext>
      <Droppable droppableId="droppable" direction="horizontal">
        {/* 横方向にdndしたい時はdirectionを設定 */}
        {(provided) => (
          <div
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
              />
            ))}
            <provided.placeholder />
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TaskCards;
