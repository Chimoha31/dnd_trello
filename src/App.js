import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  return (
    <div className="dragDropArea">
      <DragDropContext>
        <Droppable droppableId="droppable">
          {/* droppableの直下は関数でなければいけない。 */}
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}> 
              {/* innerRef=dragしている要素以外の要素の動きを制御する役割 */}
              <Draggable draggableId="item0" index={0}>
                {/* draggableの直下は関数でなければいけない。 */}
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    item0
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
