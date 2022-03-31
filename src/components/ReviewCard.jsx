import React from "react";
import coltonAvatar from "../images/image-colton.jpg";
import anneAvatar from "../images/image-anne.jpg";
import ireneAvatar from "../images/image-irene.jpg";

const ReviewCard = ({ detail }) => {
  return (
    <div className="px-8 py-6 mb-4 text-left rounded-md bg-primary-dark review md:py-8">
      {/* header */}
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 overflow-hidden rounded-full md:h-10">
          {detail.image === "colton" && (
            <img
              src={coltonAvatar}
              alt="avatar"
              className="object-cover w-full h-full"
            />
          )}
          {detail.image === "anne" && (
            <img
              src={anneAvatar}
              alt="avatar"
              className="object-cover w-full h-full"
            />
          )}

          {detail.image === "irene" && (
            <img
              src={ireneAvatar}
              alt="avatar"
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <div className="font-bold">
          <p className="text-sm text-white md:text-base">{detail.name}</p>
          <p className="text-xs text-primary md:text-sm">Verified Buyer</p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 text-sm leading-6 text-primary-light md:text-base">
        <p>
          <span>" </span>
          {detail.content}
          <span> "</span>
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
