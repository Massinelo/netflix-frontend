import React from "react";

const Section = ({ dataSection }) => {
  return (
    <div className="section">
      <p>{dataSection.category}</p>
      <div className="list">
        {dataSection.images.map((item, index) => {
          return <img key={index} src={item} alt="movies" />;
        })}
      </div>
    </div>
  );
};

export default Section;
