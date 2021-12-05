import React, { Component } from "react";
import { IProject } from "../types";

interface IProjectCardProps {
  project: IProject;
  onClick: (id: number) => void;
  id: number;
}

//TODO: сделать компонент ProjectCardProps
export class ProjectCardProps extends React.Component<IProjectCardProps> {
  render() {
    return (
      <div
        style={{
          background: this.props.project.important ? "fuchsia" : "lime"
        }}
        onClick={() => this.props.onClick(this.props.id)}
      >
        {this.props.project.text}
      </div>
    );
  }
}
