import React, { useState } from "react";

function TaskCardTitle() {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  }

  return (
    <div onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
}

export default TaskCardTitle;
