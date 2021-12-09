import React, { FC, useEffect, useState, useRef } from "react";
import { fetchProjects, fetchTotos } from "./mocks/mockFetcher";
import { IProject, ITodo } from "./types";

// Реализуйте хук для получения проектов, используя
// асинхронную функцию fetchProjects. Дайте пользователю
// знать, что происходит загрузка

type loadedData<T> = {
  isLoading: boolean;
  content: T;
};

const useProjects = (): loadedData<IProject[]> => {
  const [projects, setProjects] = useState<IProject[]>([]);
  fetchProjects().then((projs) => setProjects(projs));

  return {
    isLoading: !projects.length,
    content: projects
  };
};

// Реализуйте хук для получения todo проектов, используя
// асинхронную функцию fetchTotos. Дайте пользователю
// знать, что происходит загрузка. Реализуйте функцию
// удаления записи todo. Избегайте повторной загрузки
// данных — это сбросит удалённые элементы списка

type deletableLoadedTata<T> = loadedData<T> & {
  remove: (todoId: number) => void;
};

const useTodos = (projectId: number | null): deletableLoadedTata<ITodo[]> => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    if (projectId !== null) {
      fetchTotos(projectId).then((ts) => setTodos(ts));
    }
  }, [projectId]);
  return {
    isLoading: !todos.length,
    content: todos,
    remove: (todoId) => {
      if (projectId !== null) {
        setTodos(todos.filter((ts) => ts.id !== todoId));
      }
    }
  };
};

// Допишите компонент фильтра. При нажатии на кнопку "поиск"
// необходимо вызвать onFilter из свойств компонента.
// Дополнительной задачей является минимизация количества
// обновлений компонента (вывод "FilterComponent render" в
// консоль должен быть минимальным)

type FilterProps = {
  onFilter: (search: string) => void;
};

const FilterComponent: FC<FilterProps> = ({ onFilter }) => {
  console.log("FilterComponent render");

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      Фильтр:&nbsp;
      <input ref={inputRef} />
      <button
        onClick={() =>
          onFilter(inputRef.current?.value.length ? inputRef.current.value : "")
        }
      >
        поиск
      </button>
    </div>
  );
};

export { useProjects, useTodos, FilterComponent };
