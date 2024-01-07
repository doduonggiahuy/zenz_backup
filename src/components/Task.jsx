// Task.jsx
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, index }) => {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="border p-2 mb-2 bg-white"
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
