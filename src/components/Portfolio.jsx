/* eslint-disable react/prop-types */
import { useState } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

useState
export default function Portfolio (props) {
  const [state, setState] = useState({filter: "All"});

  const projectFiltered = props.projects.filter(project => {
    if (state.filter === "All") {
      return true;
    }
    return project.category === state.filter
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
    setState({...state, "filter": filter});
  }

  return (
    <>
      <Toolbar filters={filters} selected={state.filter} onSelectFilter={selectFilter}/>
      <ProjectList projects={projectFiltered} />
    </>
  )
}