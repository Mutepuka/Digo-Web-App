"use client";

import React from "react";

const UserTypeCard = ({ register, title, text, setUserType, userType, value }) => {
  return (
    <label htmlFor={value} onClick={() => setUserType(value)} style={{ cursor: "pointer", width: "100%" }}>
      <div className={`card ${userType === value ? "active-card" : "inactive-card"}`}>
        <div className="card-body d-flex flex-row">
          {/* Person Icon */}
          <div className="person-icon">
            <i className="bi bi-person icon-user"></i>
          </div>

          {/* Card Info */}
          <div className="card-info">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
          </div>

          {/* Radio Button */}
          <div className={userType === value ? "radio-btn-up-active" : "radio-btn-up-inactive"}>
            <input
              {...register("type")}
              value={value}
              className="invisible"
              id={value}
              type="radio"
              checked={userType === value}
              readOnly
            />
          </div>
        </div>
      </div>
    </label>
  );
};

export default UserTypeCard;
