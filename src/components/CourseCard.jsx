import React from "react";
import arrowright from "../assets/arrowright.png";
import reacticon from "../assets/reacticon.png";
import socialicon from "../assets/socialicon.png";
import vueicon from "../assets/vueicon.png";
import designicon from "../assets/designicon.png";

const CourseCard = ({ card, onClick }) => {
  return (
    <div className="main-card" onClick={onClick}>
      <div className="all-courses">
        <p className="view-course">View all Courses</p>
        <img src={arrowright} alt="" />
      </div>

      <div className="icons">
        <img src={reacticon} alt="" />
        <img src={socialicon} alt="" />
        <img src={vueicon} alt="" />
        <img src={designicon} alt="" />
      </div>

      <div className="course-content">
        <div className="course">
          <div className="left">
            <p className="boldtext">
              {card.number} <span className="plus">+</span>
            </p>
          </div>

          <div className="right">
            <p className="card-title">{card.title}</p>
            <p className="card-description">{card.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;