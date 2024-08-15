import { useState } from "react";
import { projects } from "../../data";
import "./index.css";

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="w-full h-auto flex flex-column items-center justify-center mb-5"
    >
      <h2 className="mb-4 text-6xl font-extrabold text-green-100">
        Software Projects
      </h2>
      <div
        id="project-section"
        className="w-full grid grid-cols-2 gap-4 max-w-[1100px] mb-5"
      >
        {projects.map((project) => {
          return (
            <div
              key={project.name}
              className="w-full h-auto flex-col py-6 px-4 glass1"
            >
              <div id="project-container" className="w-full">
                <div className="me-4 flex flex-col">
                  {project.imageUrl.map((image) => {
                    return (
                      <img
                        className="mb-3"
                        style={{ width: "100%", objectFit: "contain" }}
                        src={image}
                        alt={"Image of" + project.name}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-column">
                  <h2 className="text-3xl font-extrabold mb-2">
                    {project.name}
                  </h2>
                  <h5 className="text-success-emphasis font-semibold mb-2">
                    👤 {project.position}
                  </h5>
                  <h5 className="text-info-emphasis font-semibold mb-2">
                    📅 {project.year}
                  </h5>
                  <p className="text-base">{project.description}</p>
                </div>
              </div>
              <div className="w-full">
                <p className="mt-3 mb-2 text-yellow-300 font-semibold">
                  Links:{" "}
                </p>
                <div className="flex mt-2 gap-3">
                  {project.links.map((link) => {
                    return (
                      <a
                        key={link.name}
                        className=" me-3 flex text-base gap-2"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="me-2"
                          height="24px"
                          width="24px"
                          src={link.imageUrl}
                          alt={link.name}
                        />
                        {link.sideNote}
                      </a>
                    );
                  })}
                </div>
                <p className="mt-3 mb-2 text-yellow-300 font-semibold">
                  Tech Stack used:{" "}
                </p>
                <div
                  className="w-full grid grid-flow-col-dense justify-content-start gap-3"
                  style={{ height: "30px" }}
                >
                  {project.tech_stack.map((tech) => {
                    return (
                      <img
                        key={tech.name}
                        height="24px"
                        width="24px"
                        src={tech.imageUrl}
                        alt={"Icon of" + tech.name}
                        title={tech.name}
                      />
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
