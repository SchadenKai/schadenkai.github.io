import { useEffect } from "react";
import "./index.css";
import { skills } from "../../data";
import GlassContainer from "../../components/glassContainer";

export default function Skills() {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div id="skills" className="w-full h-auto mb-5 p-4">
        <GlassContainer className="skills_container">
          <p className="font-extrabold text-xl my-2 mb-3">Frontend (Web)</p>
          <div>
            {skills.frontend_web.map((data) => (
              <div
                key={data.name}
                className={
                  "flex w-full justify-content-start gap-4 mb-1 " +
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
        <p className="font-extrabold text-xl my-2 mb-3">Backend</p>
          <div>
            {skills.backend.map((data) => (
              <div
                key={data.name}
                className={
                  "flex w-full justify-content-start gap-4 mb-1 " +
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
        <p className="font-extrabold text-xl my-2 mb-3">Database</p>
          <div>
            {skills.database.map((data) => (
              <div
                key={data.name}
                className={
                  "flex w-full justify-content-start gap-4 mb-1 " +
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
        <p className="font-extrabold text-xl my-2 mb-3">DevOps</p>
          <div>
            {skills.dev_ops.map((data) => (
              <div
                key={data.name}
                className={
                  "flex w-full justify-content-start gap-4 mb-1 " +
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
        <p className="font-extrabold text-xl my-2 mb-3">Cloud</p>
          <div>
            {skills.cloud.map((data) => (
              <div
                key={data.name}
                className={
                  "flex w-full justify-content-start gap-4 mb-1 " +
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
        <p className="font-extrabold text-xl my-2 mb-3">Mobile</p>
          <div>
            {skills.mobile.map((data) => (
              <div
                key={data.name}
                className={
                  "flex w-full justify-content-start gap-4 mb-1 " +
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
        <p className="font-extrabold text-xl my-2 mb-3">Tools</p>
          <div>
            {skills.tools.map((data) => (
              <div
                key={data.name}
                className={
                  "flex w-full justify-content-start gap-4 mb-1 " +
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
        <p className="font-extrabold text-xl my-2 mb-3">Languages</p>
          <div>
            {skills.languages.map((data) => (
              <div
                key={data.name}
                className={
                  "flex w-full justify-content-start gap-4 mb-1 " +
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
        <p className="font-extrabold text-xl my-2 mb-3">AI / ML</p>
          <div>
            {skills.ml_ai.map((data) => (
              <div
                key={data.name}
                className={
                  "flex w-full justify-content-start gap-4 mb-1 " +
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
