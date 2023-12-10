/* eslint-disable react/prop-types */
import { useState } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

export default function Portfolio (props) {
  const [filter, setState] = useState("All");

  const projectFiltered = props.projects.filter(project => {
    if (filter === "All") {
      return true;
    }
    return project.category === filter
  }
  );

  const filters = props.projects.reduce((result, project) => {
    if (!result.includes(project.category)) {
      result.push(project.category)
    }
    return result;
  },
  ["All"]);

  const selectFilter = (filter) => {
    setState(filter);
  }

  return (
    <>
      <Toolbar filters={filters} selected={filter} onSelectFilter={selectFilter}/>
      <ProjectList projects={projectFiltered} />
    </>
  )
}