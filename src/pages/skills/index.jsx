import { useEffect } from "react";
import "./index.css";
import { skills } from "../../data";
import GlassContainer from "../../components/glassContainer";

export default function Skills() {
  return (
    <div className="w- d-flex align-items-center justify-content-center">
      <div id="skills" className="w-100 h-auto mb-5 p-4">
        <GlassContainer className="skills_container">
          <p>Frontend (Web)</p>
          <div>
            {skills.frontend_web.map((data) => (
              <div
                key={data.name}
                className={
                  "d-flex w-100 w-100 justify-content-start gap-4 mb-1 " +
                  data.status
                }
              >
                <img
                  key={data.name}
                  src={data.imageUrl}
                  alt={"Icon of" + data.name}
                  title={data.name}
                />
                <p className="m-0 fs-6" key={data.name}>
                  {data.name}
                </p>
              </div>
            ))}
          </div>
        </GlassContainer>
        <GlassContainer className="skills_container">
          <p>Backend</p>
          <div>
            {skills.backend.map((data) => (
              <div
                key={data.name}
                className={
                  "d-flex w-100 w-100 justify-content-start gap-4 mb-1 " +
                  data.status
                }
              >
                <img
                  key={data.name}
                  src={data.imageUrl}
                  alt={"Icon of" + data.name}
                  title={data.name}
                />
                <p className="m-0 fs-6" key={data.name}>
                  {data.name}
                </p>
              </div>
            ))}
          </div>
        </GlassContainer>
        <GlassContainer className="skills_container">
          <p>Database</p>
          <div>
            {skills.database.map((data) => (
              <div
                key={data.name}
                className={
                  "d-flex w-100 w-100 justify-content-start gap-4 mb-1 " +
                  data.status
                }
              >
                <img
                  key={data.name}
                  src={data.imageUrl}
                  alt={"Icon of" + data.name}
                  title={data.name}
                />
                <p className="m-0 fs-6" key={data.name}>
                  {data.name}
                </p>
              </div>
            ))}
          </div>
        </GlassContainer>
        <GlassContainer className="skills_container">
          <p>DevOps</p>
          <div>
            {skills.dev_ops.map((data) => (
              <div
                key={data.name}
                className={
                  "d-flex w-100 w-100 justify-content-start gap-4 mb-1 " +
                  data.status
                }
              >
                <img
                  key={data.name}
                  src={data.imageUrl}
                  alt={"Icon of" + data.name}
                  title={data.name}
                />
                <p className="m-0 fs-6" key={data.name}>
                  {data.name}
                </p>
              </div>
            ))}
          </div>
        </GlassContainer>
        <GlassContainer className="skills_container">
          <p>Cloud</p>
          <div>
            {skills.cloud.map((data) => (
              <div
                key={data.name}
                className={
                  "d-flex w-100 w-100 justify-content-start gap-4 mb-1 " +
                  data.status
                }
              >
                <img
                  key={data.name}
                  src={data.imageUrl}
                  alt={"Icon of" + data.name}
                  title={data.name}
                />
                <p className="m-0 fs-6" key={data.name}>
                  {data.name}
                </p>
              </div>
            ))}
          </div>
        </GlassContainer>
        <GlassContainer className="skills_container">
          <p>Mobile</p>
          <div>
            {skills.mobile.map((data) => (
              <div
                key={data.name}
                className={
                  "d-flex w-100 w-100 justify-content-start gap-4 mb-1 " +
                  data.status
                }
              >
                <img
                  key={data.name}
                  src={data.imageUrl}
                  alt={"Icon of" + data.name}
                  title={data.name}
                />
                <p className="m-0 fs-6" key={data.name}>
                  {data.name}
                </p>
              </div>
            ))}
          </div>
        </GlassContainer>
        <GlassContainer className="skills_container">
          <p>Tools</p>
          <div>
            {skills.tools.map((data) => (
              <div
                key={data.name}
                className={
                  "d-flex w-100 w-100 justify-content-start gap-4 mb-1 " +
                  data.status
                }
              >
                <img
                  key={data.name}
                  src={data.imageUrl}
                  alt={"Icon of" + data.name}
                  title={data.name}
                />
                <p className="m-0 fs-6" key={data.name}>
                  {data.name}
                </p>
              </div>
            ))}
          </div>
        </GlassContainer>
        <GlassContainer className="skills_container">
          <p>Languages</p>
          <div>
            {skills.languages.map((data) => (
              <div
                key={data.name}
                className={
                  "d-flex w-100 w-100 justify-content-start gap-4 mb-1 " +
                  data.status
                }
              >
                <img
                  key={data.name}
                  src={data.imageUrl}
                  alt={"Icon of" + data.name}
                  title={data.name}
                />
                <p className="m-0 fs-6" key={data.name}>
                  {data.name}
                </p>
              </div>
            ))}
          </div>
        </GlassContainer>
      </div>
    </div>
  );
}
