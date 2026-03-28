import React from "react";

const StatCard = ({ card, onClick }) => {
  return (
    <div className="stat-card" onClick={onClick}>
      <div className="rotated-content">
        <p className="stat-card-title">{card.title}</p>
        <p className="stat-card-description">{card.description}</p>
      </div>

      <div className="bottom-text">
        <p className="stat-card-number">
          {card.number}
          <span className="stat-plus">+</span>
        </p>
      </div>
    </div>
  );
};

export default StatCard;