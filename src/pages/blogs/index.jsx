import { useEffect, useState } from "react";
import "./index.css";

export default function BlogPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apikey = import.meta.env.VITE_DEVTO_API;
    fetch(`https://dev.to/api/articles?username=kainoah`)
      .then((response) => response.json())
      .then((parsedData) => setData(parsedData))
      .then(() => console.log({ Data: data }));
  }, []);
  return (
    <div
      id="blogs"
      className="w-100 h-auto flex flex-column items-center justify-center mb-5"
    >
      <h2 className="mb-4 text-6xl font-extrabold text-green-100">Blogs</h2>
      <div
        id="blog-container"
        className="w-full grid grid-cols-2 gap-4 max-w-[1100px] mb-5"
      >
        {data.map((item) => {
          return (
            <div
              key={item}
              id="blog-item"
              className="w-full h-auto py-6 px-4 glass1"
              style={{ cursor: "pointer" }}
              onClick={() => (location.href = `${item.url}`)}
            >
              <div className="flex gap-3 items-center">
                <img src={item.user.profile_image} alt="" />
                <div className="flex flex-column">
                  <h4 className="p-0 m-0 text-xl font-extrabold">{item.title}</h4>
                  <p id="username" className="p-0 m-0">
                    {"@" + item.user.username}
                  </p>
                </div>
              </div>
              <p id="description">{item.description}</p>
              <div className="w-100 flex justify-content-end gap-3">
                <p id="article-date" className="p-0 m-0">
                  {item.reading_time_minutes + " Min. read"}
                </p>
                <p id="article-date" className="p-0 m-0">
                  {item.readable_publish_date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
