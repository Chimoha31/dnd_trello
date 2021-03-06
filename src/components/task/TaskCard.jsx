import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskAddInput from "./input/TaskAddInput";
import TaskCardTitle from "./TaskCardTitle";
import Tasks from "./Tasks";

function TaskCard({ taskCardsList, setTaskCardsList, taskCard, index }) {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="taskCard"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div
            className="taskCardTitleAndTaskCardButtonArea"
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            setTaskList={setTaskList}
            taskList={taskList}
          />
          {/* ↓taskAddInputで入力した文字をenterした時にTasksに反映させる為、 taskAddInput.jsxからinputTextとtaskListを渡す*/}
          <Tasks
            inputText={inputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
