import '../styles/Project.css'
export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <h4 className="card-title">{project.name}</h4>
      <p className="card-status">
        Status: <b>{project.status}</b>
      </p>
      <a className='btn btn-dark' href={`/projectDetails/${project.id}`}>View</a>
    </div>
  );
}
