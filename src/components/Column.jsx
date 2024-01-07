// Column.jsx
import React from "react";
import { StrictModeDroppable as Droppable } from "./StrictModeDroppable.tsx";
import Task from "./Task";
import styled from "styled-components";

const Column = ({ columnId, title, tasks }) => {
  const ColumnStyle = styled.div`
    opacity: 90%;
    backdrop-filter: blur(50px);
    background-color: grey;
    width: 18rem;
    height: 30rem;
    font-size: 1.5rem;

    &:hover {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
  `;
  return (
    <Droppable droppableId={columnId} direction="vertical">
      {(provided) => (
        <ColumnStyle
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="p-4 border m-8 mt-2 rounded"
        >
          <p className="mb-4">{title}</p>
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </ColumnStyle>
      )}
    </Droppable>
  );
};

export default Column;
