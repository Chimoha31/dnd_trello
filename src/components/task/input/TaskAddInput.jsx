import React from "react";
import { v4 as uuid } from 'uuid';

function TaskAddInput({ inputText, setInputText, taskList, setTaskList }) {
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    // カードを追加する時は、formでenterが押された時。以下、カードを追加していく。
    // taskListの配列の中にどんどんinputTextを格納していきたい。(...taskListは以前のtaskListの内容)
    if (inputText === "") {
      return;
    }
    setTaskList([
      ...taskList,
      {
        id: taskId, //lengthでidを設定するとbugの原因。邪道。uuidでユニークなidを持たせること。
        draggableId: `task-${taskId}`, //lengthでidを設定するとbugの原因。邪道。uuidでユニークなidを持たせる。
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          value={inputText}
          className="taskAddInput"
          type="text"
          placeholder="add a task"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default TaskAddInput;
