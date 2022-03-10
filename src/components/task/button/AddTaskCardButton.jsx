import React from "react";
import { v4 as uuid } from "uuid";

function AddTaskCardButton({ taskCardsList, setTaskCardsList }) {
  const addTaskCardHandle = () => {
    const taskCardUuid = uuid();
    // ボタンを押したらtaskCardを追加する
    setTaskCardsList([
      ...taskCardsList,
      { id: taskCardUuid, draggableId: `item${taskCardUuid}` },
    ]);
  };

  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCardHandle}>
        +
      </button>
    </div>
  );
}

export default AddTaskCardButton;
