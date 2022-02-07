import React, { useState } from "react";
import "./index.css";
import { Container } from "../models/index.js";

export const NewModel = () => {
  const [view, setView] = useState("newModel");
  const [geometry, setGeometry] = useState("boxGeometry");
  const [color, setColor] = useState("white");

  const hadleChangeGeometry = (newGeometry) => {
    setGeometry(newGeometry);
  };

  const handleColorCodeChange = (newColor) => {
    setColor(newColor);
  };
  const handleBack = () => {
    setView("newModel");
  };

  return (
    <div className="container">
      {view === "newModel" && (
        <>
          <div className="tittle">
            Please complete fields to create a new design
          </div>
          <div className="body-container">
            <div className="row-container">
              <div className="field">
                <div className="label">Please select geometry</div>
                <select
                  value={geometry}
                  onChange={(e) => hadleChangeGeometry(e.target.value)}
                >
                  <option value={"boxGeometry"}>Box Geometry</option>
                  <option value={"circleGeometry"}>Circle Geometry</option>{" "}
                  <option value={"coneGeometry"}>Cone Geometry</option>{" "}
                  <option value={"sphereGeometry"}>Sphere Geometry</option>
                  <option value={"latheGeometry"}>Lathe Geometry</option>
                </select>
              </div>
              <div className="field">
                <div className="label">Insert color code</div>
                <input
                  value={color}
                  onChange={(e) => handleColorCodeChange(e.target.value)}
                  type={"text"}
                />
              </div>
            </div>
            <div className="button-container">
              <button onClick={() => setView("model")}>Apply</button>
            </div>
          </div>
        </>
      )}
      {view === "model" && (
        <Container geometry={geometry} color={color} handleBack={handleBack} />
      )}
    </div>
  );
};
