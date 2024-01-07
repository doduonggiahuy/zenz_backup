// Main.jsx
import React, { useState, lazy, Suspense } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import bg from "../assets/images/bedroom.jpg";
import { Spin } from "antd";

const MainTopButton = lazy(() => import("../views/MainTopButton"));
const MainContainer = lazy(() => import("../views/MainContainer"));
const Column = lazy(() => import("../components/Column"));

const Main = () => {
  const HTMLBODY = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
    font-family: "Roboto", sans-serif;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: scroll;
    position: relative;
    overflow-y: auto;
  `;
  const SpotifyContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 70rem);
    opacity: 0.7;
    border-radius: 12px;
  `;
  const topButtons = [
    { label: "Gmail", href: "https://gmail.com/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "Jira", href: "https://www.atlassian.com/software/jira" },
    { label: "BitBucket", href: "https://bitbucket.org/" },
    { label: "Cron", href: "https://cron.com/" },
  ];

  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const [tasks, setTasks] = useState({
    "to-do": [],
    "in-progress": [
      { id: "task-5", content: "ReactJS" },
      { id: "task-6", content: "TailwindCSS" },
      { id: "task-7", content: "Bootstrap 5" },
    ],
    done: [{ id: "task-4", content: "HTML, CSS" }],
    unfinished: [
      { id: "task-1", content: "Responsive" },
      { id: "task-2", content: "Business Logic" },
      { id: "task-3", content: "API" },
    ],
  });

  const columns = [
    { id: "to-do", title: "To do", tasks: tasks["to-do"] },
    { id: "in-progress", title: "In Progress", tasks: tasks["in-progress"] },
    { id: "done", title: "Done", tasks: tasks["done"] },
    { id: "unfinished", title: "Unfinished", tasks: tasks["unfinished"] },
  ];

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceTasks = [...tasks[source.droppableId]];
    const destinationTasks = [...tasks[destination.droppableId]];

    const [movedTask] = sourceTasks.splice(source.index, 1);
    destinationTasks.splice(destination.index, 0, movedTask);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceTasks,
      [destination.droppableId]: destinationTasks,
    });
  };

  return (
    <HTMLBODY
      className="container-fluid h-screen text-xl p-0 items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Suspense
        fallback={
          <div className="text-black text-center text-lg fixed">
            <Spin className="pr-2" />
            Loading...
          </div>
        }
      >
        <MainTopButton
          buttons={topButtons}
          openLinkInNewTab={openLinkInNewTab}
        />
      </Suspense>
      <Suspense
        fallback={
          <div className="text-black text-center text-lg fixed left-1/2 ">
            <Spin className="pr-2" />
            Loading...
          </div>
        }
      >
        <MainContainer>
          <p
            className="text-white text-center text-xl mt-3 mb-0 pb-0"
            style={{ textShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}
          >
            Overview Technical Skill <br />
            Available drag and drop
          </p>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex justify-center">
              {columns.map((column) => (
                <Suspense
                  key={column.id}
                  fallback={
                    <div className="text-black text-center text-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5">
                      <Spin className="pr-2" />
                      Loading...
                    </div>
                  }
                >
                  <Column
                    columnId={column.id}
                    title={column.title}
                    tasks={column.tasks}
                  />
                </Suspense>
              ))}
            </div>
          </DragDropContext>
        </MainContainer>
      </Suspense>
      <SpotifyContainer style={{ bottom: "-4rem" }}>
        <iframe
          style={{ width: "100%", height: "152", border: "0" }}
          src="https://open.spotify.com/embed/playlist/671ZWlQMPSY2IO6Ot7b57V?utm_source=generator&theme=0"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </SpotifyContainer>
    </HTMLBODY>
  );
};

export default Main;
