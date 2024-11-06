import React from "react";
import "../scss/toDoesList.scss";
import { ToDoeModel } from "../../modal";
import SingleTodo from "./SingleTodo";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

interface Props {
  toDoes: ToDoeModel[];
  completeToDoes: ToDoeModel[];
  setToDoes: React.Dispatch<React.SetStateAction<ToDoeModel[]>>;
  setCompleteToDoes: React.Dispatch<React.SetStateAction<ToDoeModel[]>>;
}

const ToDoesList: React.FC<Props> = React.memo(
  ({ toDoes, setToDoes, completeToDoes, setCompleteToDoes }) => {
    const onDragEndHandler = (result: DropResult) => {
      const { source, destination } = result;

      // Log source and destination
      console.log("Source", source);
      console.log("Destination", destination);

      // If there's no destination, do nothing
      if (!destination) return;

      // Check if the item was moved to the same place
      if (
        source.droppableId === destination.droppableId &&
        destination.index === source.index
      )
        return;

      let active = toDoes;
      let complete = completeToDoes;
      let movedItem;

      // Move item from active or complete
      if (source.droppableId === "add") {
        movedItem = active[source.index];
        active.splice(source.index, 1);
      } else {
        movedItem = complete[source.index];
        complete.splice(source.index, 1);
      }

      // Add item to the new location
      if (destination.droppableId === "add") {
        active.splice(destination.index, 0, movedItem);
      } else {
        complete.splice(destination.index, 0, movedItem);
      }

      // Update the state
      setToDoes(active);
      setCompleteToDoes(complete);
    };

    return (
      <DragDropContext onDragEnd={onDragEndHandler}>
        <div className="to-does-list-container">
          <Droppable droppableId="add">
            {(provided) => (
              <div
                className="to-does-list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <span className="container">Active To-Does</span>
                {toDoes.map((todo, index) => (
                  <SingleTodo
                    index={index}
                    todo={todo}
                    toDoes={toDoes}
                    setToDoes={setToDoes}
                    key={todo.id}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="complete">
            {/* Corrected ID here */}
            {(provided) => (
              <div
                className="to-does-list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <span className="container">Completed To-Does</span>
                {completeToDoes.map((todo, index) => (
                  <SingleTodo
                    index={index}
                    todo={todo}
                    toDoes={completeToDoes}
                    setToDoes={setCompleteToDoes}
                    key={todo.id}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
);

export default ToDoesList;
