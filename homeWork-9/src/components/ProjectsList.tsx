import React, { Component } from "react";
import { IProject } from "../types";
import { ProjectCardProps } from "./ProjectCard";

interface IProjectsListProps {
  projects: IProject[];
  onClick: (id: number) => void;
}

//TODO: Добавить компонент ProjectsList
// важные подкрасить красным, неважные зелёным

export class ProjectsList extends React.Component<IProjectsListProps> {
  render() {
    return this.props.projects.map((p) => {
      return (
        <ProjectCardProps
          project={p}
          onClick={this.props.onClick}
          id={p.id}
          key={p.id}
        />
      );
    });
  }
}
