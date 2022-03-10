import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Task({ task, taskList, setTaskList }) {
  const handleDelete = (id) => {
    // filter()メソッドは合致する全ての配列からなる新しい配列を生成！
    // だからわざわざremove()とかdeleteという形で考えなくても結果的に消したい配列の要素を消す事ができる！
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <Draggable draggableId={task.draggableId} index={task.id}>
      {(provided) => (
        <div
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskTitle">{task.text}</p>
          <button
            className="taskTrashButton"
            onClick={() => handleDelete(task.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
