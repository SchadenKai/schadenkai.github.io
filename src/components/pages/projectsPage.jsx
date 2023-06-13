import { projects } from "../../constants";

export default function ProjectsPage() {
  return (
    <page id="projects" className="w-100 d-flex flex-column align-items-center justify-content-center ">
      <div className="w-50 h-75 p-4 glass1 d-flex flex-column mb-5">
        <h2 className="mb-4">Projects</h2>
        {projects.map((project) => {
          return (
            <div className="w-100 row mb-5">
              <div className="col-6 me-4 d-flex flex-column">
                {project.imageUrl.map((image) => {
                  return (
                    <img
                      className="mb-3"
                      style={{ maxHeight: "160px", width: "auto" }}
                      src={image}
                      alt={project.name}
                    />
                  );
                })}
              </div>
              <div className="col d-flex flex-column">
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
                <div className="w-100 d-flex justify-content-around" style={{height : "30px"}}>
                    {project.tech_stack.map((tech) => {
                        return (
                            <img height="100%" src={tech.imageUrl} alt={tech.name} />
                        )
                    })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </page>
  );
}
