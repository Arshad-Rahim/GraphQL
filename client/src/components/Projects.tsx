import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import { IProject } from "../interface/projectInterface";
import ProjectCard from "./ProjectCard";
import "../styles/Project.css"; // Import the CSS file

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p className="loading-text">Loading...</p>;
  if (error) return <h4 className="error-text">Something Went Wrong</h4>;

  return (
    <div className="projects-container">
      <h2 className="title">Projects</h2>
      <div className="project-grid">
        {data.projects.map((project: IProject) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
