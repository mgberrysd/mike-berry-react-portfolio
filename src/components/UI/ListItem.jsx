import { Link } from "react-router-dom";

export default function ListItem({ projectTitle, projectLink, projectGithubLink, projectImage }) {
  return projectLink ? (
    <section className="projects">
      <h3>{projectTitle}</h3>
      <Link to={projectLink}>
        <img src={projectImage} alt="Deployed website"></img>
      </Link>
      <p className="text-center card">
        <Link to={projectGithubLink}>Github Repo</Link>
      </p>
    </section>
  ) : (
    <section className="projects">
      <h3>{projectTitle}</h3>
    </section>
  );
}
