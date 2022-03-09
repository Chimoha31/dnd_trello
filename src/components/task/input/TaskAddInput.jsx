import React from "react";

function TaskAddInput({ inputText, setInputText, taskList, setTaskList }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // カードを追加する時は、formでenterが押された時。以下、カードを追加していく。
    // taskListの配列の中にどんどんinputTextを格納していきたい。(...taskListは以前のtaskListの内容)
    setTaskList([...taskList, { text: inputText, }]);
    console.log(...taskList);
    console.log(inputText);

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
