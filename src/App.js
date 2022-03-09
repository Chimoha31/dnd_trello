import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";

function App() {
  const [items] = useState([
    { id: 0, text: "item0" },
    { id: 1, text: "item1" },
    { id: 2, text: "item2" },
  ]);

  const onDragEnd = (result) => {
    console.log(result.source.index);
    console.log(result.destination.index);
    if (!result.destination) {
      return;
    }
    const remove = items.splice(result.source.index, 1);
    console.log(remove);
    const add = items.splice(result.destination.index, 0, remove[0]);
    return add;
  };

  return (
    <div className="dragDropArea">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {/* droppableの直下は関数でなければいけない。 */}
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {/* innerRef=dragしている要素以外の要素の動きを制御する役割 */}

              {items.map((item, index) => (
                // draggableIdはstring型にする必要があるので、draggableId={item.id}ではエラーになる。ここではdraggableId={item.text}にしておく。
                <Draggable draggableId={item.text} index={index} key={item.id}>
                  {/* draggableの直下は関数でなければいけない。 */}
                  {(provided) => (
                    <div
                      className="item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.text}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
