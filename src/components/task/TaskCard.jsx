import React, { useState } from "react";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskAddInput from "./input/TaskAddInput";
import TaskCardTitle from "./TaskCardTitle";
import Tasks from "./Tasks";

function TaskCard() {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState("");

  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        setTaskList={setTaskList}
        taskList={taskList}
      />
      {/* ↓taskAddInputで入力した文字をenterした時にTasksに反映させる為、 taskAddInput.jsxからinputTextとtaskListを渡す*/}
      <Tasks inputText={inputText} taskList={taskList} />
    </div>
  );
}

export default TaskCard;
