import React from "react";
import Task from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reorder = (taskList, startIndex, endIndex) => {
  const remove = taskList.splice(startIndex, 1);
  taskList.splice(endIndex, 0, remove[0]);
}

export default function Tasks({ taskList, setTaskList }) {
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}{" "}
              {/* <Droppable>の範囲を柔軟性を持たせるために付ける。付けないとstyleが崩れる */}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
