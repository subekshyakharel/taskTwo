import React, { useState } from "react";
import CourseCard from "../components/CourseCard";
import StatCard from "../components/StatCard";

const cardsData = [
  {
    id: 1,
    number: "23",
    title: "All Courses",
    description: "courses you're powering through right now.",
  },
  {
    id: 2,
    number: "05",
    title: "Upcoming Courses",
    description: "exciting new courses waiting to boost your skills.",
  },
  {
    id: 3,
    number: "10",
    title: "Ongoing Courses",
    description: "currently happening—don’t miss out on the action!",
  },
];

const Course = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="container">
      <div className="heading">
        <p className="title">Note: Click the cards to view the animation</p>
      </div>

      <div className="content">
        <div className="stat-section">
          <p className="stat-subtitle">
            Explore our classes and master trending skills!
          </p>
          <p className="stat-title">
            Dive Into <span className="green">What's Hot Right Now!</span> 🔥
          </p>
        </div>

        <div className="grid">
          <div className="main-card-slot">
            {activeId === 1 ? (
              <CourseCard card={cardsData[0]} onClick={() => setActiveId(1)} />
            ) : (
              <StatCard
                card={cardsData[0]}
                onClick={() => setActiveId(1)}
                isActive={false}
              />
            )}
          </div>

          <div className="subcard">
            {activeId === 2 ? (
              <CourseCard card={cardsData[1]} onClick={() => setActiveId(2)} />
            ) : (
              <StatCard
                card={cardsData[1]}
                onClick={() => setActiveId(2)}
                isActive={false}
              />
            )}
          </div>

          <div className="subcard">
            {activeId === 3 ? (
              <CourseCard card={cardsData[2]} onClick={() => setActiveId(3)} />
            ) : (
              <StatCard
                card={cardsData[2]}
                onClick={() => setActiveId(3)}
                isActive={false}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;