import React, { Component } from "react";
import { ITodo } from "../types";
import { TodoCard } from "./TodoCard";

interface ITodoListProps {
  todos: ITodo[];
  deleteCallback: (id: number) => void;
}

//TODO: сделать TodoList компонент
export class TodoList extends React.Component<ITodoListProps> {
  render() {
    return (
      <ul>
        Список
        {this.props.todos.map((p) => {
          return (
            <TodoCard
              todo={p}
              deleteCallback={this.props.deleteCallback}
              id={p.id}
              key={p.id}
            />
          );
        })}
      </ul>
    );
  }
}
