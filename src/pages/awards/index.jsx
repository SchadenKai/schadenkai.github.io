import { useState } from "react";
import { awards } from "../../data";
import "./index.css";

export default function AwardsPage() {
  const [shownAwards, setShownAwards] = useState(1);
  return (
    <div
      id="awards"
      className="w-100 h-auto d-flex flex-column align-items-center justify-content-center mb-5"
    >
      <div className="glass1 p-4">
        <h3 className="text-warning mb-4">Awards</h3>
        {awards.slice(0, shownAwards).map((award) => {
          return (
            <div key={award.name} className="w-100 mb-4">
              <div className="d-flex flex-column me-2">
                <h3>{award.name + " " + award.date}</h3>
                <h5>{"🏢 " + award.issuer}</h5>
                <h6>{"📍 " + award.location}</h6>
                <p>{award.description}</p>
              </div>
              <div className="d-flex flex-column">
                {award.imageUrl.map((url) => {
                  return <img width="100%" src={url} alt={award.name} />;
                })}
              </div>
            </div>
          );
        })}
        {shownAwards == awards.length ? (
          <button
            className="btn w-100 btn-danger"
            onClick={() => setShownAwards(1)}
          >
            + Less
          </button>
        ) : (
          <button
            className="btn w-100 btn-success"
            onClick={() => setShownAwards(awards.length)}
          >
            + More
          </button>
        )}
      </div>
    </div>
  );
}
