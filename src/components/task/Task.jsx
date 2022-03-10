import React from "react";

function Task({task, taskList, setTaskList}) {

  const handleDelete = (id) => {
    // filter()メソッドは合致する全ての配列からなる新しい配列を生成！
    // だからわざわざremove()とかdeleteという形で考えなくても結果的に消したい配列の要素を消す事ができる！
   setTaskList(taskList.filter((task) => task.id !== id));
  }

  return (
    <div className="taskBox">
      <p className="taskTitle">{task.text}</p>
      <button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

export default Task;
