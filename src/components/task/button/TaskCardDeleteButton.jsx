import React from "react";

function TaskCardDeleteButton({ taskCardsList, setTaskCardsList, taskCard }) {
  // タスクカードを削除する = コンピューターがどのカードのidか？という事を分かっていないと削除できない。
  // なので、まずはidを持ってくるところから始める。今回はTaskCards.jsxのtaskCardsListの初期値としてidを持たせている。
  const taskCardDeleteBtnHandler = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteBtnHandler(taskCard.id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}

export default TaskCardDeleteButton;
