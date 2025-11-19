import { useState } from "react";
import { awards } from "../../data";
import "./index.css";

export default function AwardsPage() {
  return (
    <div
      id="awards"
      className="w-100 h-auto flex flex-column items-center justify-center mb-5"
    >
      <h2 className="mb-4 text-6xl font-extrabold text-green-100">Awards</h2>
      <div id="award-section" className="w-full h-auto grid grid-cols-2 gap-4 max-w-[1100px] mb-5">
        {awards.map((awards) => {
          return (
            <div
              key={awards.name}
              className="w-full h-auto flex-col py-6 px-4 mb-4 glass1"
            >
              <div id="award-container" className="w-full">
                <div className="me-4 flex flex-col">
                  {awards.imageUrl.map((image) => {
                    return (
                      <img
                        className="mb-3"
                        style={{ width: "100%", objectFit: "contain" }}
                        src={image}
                        alt={"Image of" + awards.name}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-column">
                  <h2 className="text-3xl font-extrabold mb-2">
                    {awards.name}
                  </h2>
                  <h5 className="text-success-emphasis font-semibold mb-2">
                    🏫 {awards.issuer}
                  </h5>
                  <h5 className="text-info-emphasis font-semibold mb-2">
                    📅 {awards.date}
                  </h5>
                  <h5 className="text-info-emphasis font-semibold mb-2">
                    🗺️ {awards.location}
                  </h5>
                  <p className="text-base">{awards.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
