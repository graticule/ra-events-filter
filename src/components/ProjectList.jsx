/* eslint-disable react/prop-types */
export default function ProjectList({projects}) {
  return (
    <div className="portfolio">
      {projects.map((project, i) => {
        return <img className="portfolio__project" key={i} src={project.img} />
      })}
    </div>
  )
}