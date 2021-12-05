import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { ProjectsList } from "./components/ProjectsList";
import { ITodo } from "./types";

const initialTodos1 = [
  { text: "Todo0", id: 0 },
  { text: "Todo1", id: 1 }
];
const initialTodos2 = [
  { text: "Todo0", id: 0 },
  { text: "Todo1", id: 1 },
  { text: "Todo2", id: 2 },
  { text: "Todo3", id: 3 },
  { text: "Todo4", id: 4 },
  { text: "Todo5", id: 5 }
];

export const App = () => {
  const [state, setState] = useState({
    selectedProjectId: 0,
    projects: [
      { important: true, text: "Важный проект", id: 0 },
      { important: false, text: "Легкий проект", id: 1 }
    ],
    todos: [initialTodos1, initialTodos2],
    todoLists: []
  });
  const selectProject = (id: number) => {
    setState((state) => ({
      ...state,
      selectedProjectId: id
    }));
    console.log("Project_id: ", id);
  };
  const deleteTodo = (id: number) => {
    setState((state) => ({
      ...state,
      todos: {
        ...state.todos,
        [state.selectedProjectId]: state.todos[state.selectedProjectId].filter(
          (todo: ITodo, index: number) => todo.id !== id
        )
      }
    }));
    console.log("Deleted_id: ", id);
  };

  return (
    <section className={"layout"}>
      <header className={"header"}>My TODO app</header>
      <aside className={"aside"}>
        {ProjectsList ? (
          <>
            Проекты
            <ProjectsList onClick={selectProject} projects={state.projects} />
          </>
        ) : (
          "Нету проектов"
        )}
      </aside>
      <main className={"main"}>
        {TodoList ? (
          <TodoList
            deleteCallback={deleteTodo}
            todos={state.todos[state.selectedProjectId]}
          />
        ) : (
          "Нету тудулиста"
        )}
      </main>
      <footer className={"footer"}>
        Эту страницу можно копировать, ваще спокойно, и публиковать где угодно.
        Да кто вообще читает что там в футере написано?
      </footer>
    </section>
  );
};
