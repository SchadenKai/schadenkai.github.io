import { projects } from "../../data";
import "./index.css";

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="w-100 d-flex flex-column align-items-center mb-5"
    >
      <div className="w-100 p-4 glass1 mb-5">
        <h2 className="mb-4 text-warning">Software Projects</h2>
        {projects.map((project) => {
          return (
            <div
              key={project.name}
              id="project-container"
              className="w-100 row mb-5"
            >
              <div className="me-4 d-flex flex-column">
                {project.imageUrl.map((image) => {
                  return (
                    <img
                      className="mb-3"
                      style={{ width: "100%", objectFit: "contain"}}
                      src={image}
                      alt={"Image of" + project.name}
                    />
                  );
                })}
              </div>
              <div className="d-flex flex-column">
                <h3>{project.name}</h3>
                <h5 className="text-danger">{project.position}</h5>
                <p>{project.description}</p>
                <div className="d-flex mt-2">
                  {project.links.map((link) => {
                    return (
                      <a
                        className=" me-3"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="me-2"
                          height="30px"
                          src={link.imageUrl}
                          alt={link.name}
                        />
                        {link.sideNote}
                      </a>
                    );
                  })}
                </div>
                <p className="mt-3 text-warning">Tech Stack used: </p>
                <div
                  className="w-100 d-flex justify-content-start gap-3"
                  style={{ height: "30px"}}
                >
                  {project.tech_stack.map((tech) => {
                    return (
                      <img height="100%" src={tech.imageUrl} alt={"Icon of" + tech.name} title={tech.name}/>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
