import React from "react";

const Jumbotron = ({backgroundImage, style, onClick, children}) => {
  return (
    <div
      style={{backgroundImage: `url(${backgroundImage})`, ...style}} 
      className="jumbotron"
      onClick={onClick}
    >
     {children}
    </div>
  );
}

export default Jumbotron;