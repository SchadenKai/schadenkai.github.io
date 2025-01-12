import "./index.css";
import { work_experience } from "../../data";

export default function WorkExperiencePage() {
  return (
    <div
      id="work-experience"
      className="w-100 h-auto flex flex-column items-center justify-center mb-5"
    >
      <h2 className="mb-4 text-6xl font-extrabold text-green-100">
        Work Experience
      </h2>
      <div
        id="work-experience-section"
        className="w-full grid grid-cols-2 gap-4 max-w-[1100px] mb-5"
      >
        {work_experience.map((experience) => {
          return (
            <div
              key={experience.company}
              className="w-full h-auto flex-col py-6 px-4 glass1"
            >
              <div id="work-experience-container" className="w-full">
                <div className="me-4 flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-2 mb-2">
                    <img
                      src={experience.logo}
                      alt={experience.company + " logo"}
                      height={32}
                      width={32}
                    />
                    <h3 className="text-3xl font-bold text-green-100">
                      {experience.company}
                    </h3>
                  </div>
                  <h5 className="text-green-100">📍{experience.location}</h5>
                  <h5 className="text-green-100">👤 {experience.position}</h5>
                  <h5 className="text-green-100">
                    📅 {experience.startDate} - {experience.endDate}
                  </h5>
                  {experience.description.map((desc, idx) => {
                    return (
                      <p key={desc + idx} className="text-green-100 text-base">
                        - {desc}
                      </p>
                    );
                  })}
                  {experience.tech_stack && (
                    <>
                      <p className="mt-3 font-semibold">Tech Stack:</p>
                      <div
                        className="w-full h-auto flex flex-wrap justify-content-start items-center gap-3"
                        style={{ height: "30px" }}
                      >
                        {experience.tech_stack.map((tech, idx) => {
                          return (
                            <img
                              key={tech.name + idx}
                              height="24px"
                              width="24px"
                              src={tech.imageUrl}
                              alt={"Icon of" + tech.name}
                              title={tech.name}
                            />
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
