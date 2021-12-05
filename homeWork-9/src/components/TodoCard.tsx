import React, { Component } from "react";
import { ITodo } from "../types";

interface TodoCardProps {
  todo: ITodo;
  deleteCallback: (id: number) => void;
  id: number;
}
const styles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 1rem",
  border: "1px solid #ccc",
  borderRadius: "5px",
  marginBottom: ".5rem",
  marginRight: "5rem",
  background: "white"
};
//TODO: сделать компонент TodoCard
export class TodoCard extends React.Component<TodoCardProps> {
  render() {
    return (
      <li style={styles}>
        <span>{this.props.todo.text}</span>
        <button
          onClick={() => this.props.deleteCallback(this.props.todo.id)}
          style={{ borderColor: "red" }}
        >
          X
        </button>
      </li>
    );
  }
}
