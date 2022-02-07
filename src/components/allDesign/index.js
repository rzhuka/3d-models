import React from "react";
import { data } from "../../data/index.js";
import "./index.css";

export const AllDesigns = () => {
  const enteriesContainer = data.map((entry) => {
    const { id, geometry, color } = entry;

    return (
      <div className="row" key={id}>
        <div className="id">{id}</div>
        <div className="geometry">{geometry}</div>
        <div className="color">{color}</div>
        <div className="actions">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    );
  });
  return (
    <div className="all-designs">
      <div className="tittle">All your designs</div>
      <div className="list-container">
        <div className="header">
          <div className="id">Id</div>
          <div className="geometry">Geometry</div>
          <div className="color">Color</div>
          <div className="actions">Actions</div>
        </div>
        <div className="body">{enteriesContainer}</div>
      </div>
    </div>
  );
};

export default AllDesigns;
