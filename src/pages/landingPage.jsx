import { useEffect, useState } from "react";
import { about, socialLinks } from "../data";

export default function LandingPage() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);
  return (
    // section wrapper
    <section
      id="home"
      className="w-full h-full flex flex-column items-center justify-center px-4"
    >
      {/* card wrapper */}
      <div className="glass1 h-auto flex flex-row px-4">
        {width > 1100 && (
          <div className="flex justify-center items-center">
            <img
              src="./img/profile_img.jpg"
              className="rounded-circle"
              width="auto"
              alt="profile image"
            />
          </div>
        )}
        {/* text column */}
        <div className="py-4 px-5">
          <h1 className="py-2 font-extrabold" style={{ fontSize: "2.5rem" }}>
            {about.name}
          </h1>
          <p>{about.description}</p>

          {width > 1100 && (
            <div className="w-100 flex mt-4">
              <p>Socials</p>
              <p className="mx-4"> | </p>
              <div className=" w-full flex flex-row gap-3">
                {socialLinks.map((social) => {
                  return (
                    <a key={social.name} href={social.url} target="_blank">
                      <img
                        height="30px"
                        width="30px"
                        src={social.imageUrl}
                        alt={social.name}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
