import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
          {cardsData.map((card, index) => {
            const isActive = activeId === card.id;

            return (
              <motion.div
                key={card.id}
                layout
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={index === 0 ? "main-card-slot" : "subcard"}
              >
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.div
                      key={`course-${card.id}`}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                    >
                      <CourseCard
                        card={card}
                        onClick={() => setActiveId(card.id)}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`stat-${card.id}`}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                    >
                      <StatCard
                        card={card}
                        onClick={() => setActiveId(card.id)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;