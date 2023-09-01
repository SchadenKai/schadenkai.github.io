import { skills } from '../data'

export default function TechStack() {
  return (
    <div id="tech_stack" className="w-100 h-100 d-flex flex-column align-items-center justify-content-center mb-5">
      <div className="w-50 h-75 p-4 glass1 d-flex flex-column justify-content-around">
        <h2>Tech stacks</h2>
        <div
          style={{ maxHeight: "70px", objectFit: "contain" }}
          className="d-flex justify-content-between w-100 h-100"
        >
          {skills.tech_stack.map(skills => {
            return (
              <img height="100%" src={skills.imageUrl} alt={skills.name} />
            )
          })}
        </div>
        <h2>Languages</h2>
        <div
          style={{ maxHeight: "70px", objectFit: "contain" }}
          className="d-flex justify-content-between w-100 h-100"
        >
          {skills.languages.map(skills => {
            return (
              <img height="100%" src={skills.imageUrl} alt={skills.name} />
            )
          })}
        </div>
        <h2>Tools and Technologies</h2>
        <div
          style={{ maxHeight: "70px", objectFit: "contain" }}
          className="d-flex justify-content-between w-100 h-100"
        >
          {skills.tools.map(skills => {
            return (
              <img height="100%" src={skills.imageUrl} alt={skills.name} />
            )
          })}
        </div>
      </div>
    </div>
  );
}
