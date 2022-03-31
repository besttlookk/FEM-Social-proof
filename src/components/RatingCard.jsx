import React from "react";
import starIcon from "../images/icon-star.svg";

const RatingCard = ({ children }) => {
  return (
    <div className="py-3 mb-4 text-center rounded-md rating md:py-4 bg-primary-light md:flex md:gap-10 md:items-center md:px-8">
      <div className="flex items-center justify-center gap-1 mb-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <img alt="start" src={starIcon} key={star} />
        ))}
      </div>
      <p className="font-bold text-primary-dark">{children}</p>
    </div>
  );
};

export default RatingCard;
