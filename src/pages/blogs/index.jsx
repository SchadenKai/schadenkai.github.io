import { useEffect, useState } from "react";
import "./index.css";

export default function BlogPage() {
  const [data, setData] = useState([]);
  const [showBlogs, setShowBlogs] = useState(1);
  useEffect(() => {
    const apikey = import.meta.env.VITE_DEVTO_API;
    fetch(`https://dev.to/api/articles?username=kainoah`)
      .then((response) => response.json())
      .then((parsedData) => setData(parsedData));
  }, []);
  return (
    <div
      id="blogs"
      className="w-100 d-flex flex-column align-items-center justify-content-center mb-5"
    >
      <div id="blog-container" className="w-100 glass1 p-4 d-flex flex-column gap-3">
        <h3 className="text-warning mb-4">Blogs</h3>
        {data.slice(0, showBlogs).map((item) => {
          return (
            <div
              id="blogs"
              className="p-4 border border-dark"
              style={{ cursor: "pointer" }}
              onClick={() => (location.href = `${item.url}`)}
            >
              <div className="d-flex flex-row gap-3 align-items-center">
                <img src="./img/icons/dev-to.svg" alt="" />
                <div className="d-flex flex-column">
                  <h4 className="p-0 m-0">{item.title}</h4>
                  <p id="username" className="p-0 m-0">
                    {"@" + item.user.username}
                  </p>
                </div>
              </div>
              <p id="description">{item.description}</p>
              <div className="w-100 d-flex justify-content-end gap-3">
                <p id="article-date" className="p-0 m-0">{item.reading_time_minutes + " Min. read"}</p>
                <p id="article-date" className="p-0 m-0">
                  {item.readable_publish_date}
                </p>
              </div>
            </div>
          );
        })}
        {showBlogs == data.length ? (
          <button
            className="btn w-100 btn-danger"
            onClick={() => setShowBlogs(1)}
          >
            + Less
          </button>
        ) : (
          <button
            className="btn w-100 btn-success"
            onClick={() => setShowBlogs(data.length)}
          >
            + More
          </button>
        )}
      </div>
    </div>
  );
}
