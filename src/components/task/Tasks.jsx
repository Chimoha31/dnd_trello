import React from "react";
import Task from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function Tasks({ taskList, setTaskList }) {
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task) => (
                <div key={task.id}>
                  <Task
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder} {/* <Droppable>の範囲を柔軟性を持たせるために付ける。付けないとstyleが崩れる */}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
