import React from "react";

const Jumbotron = ({backgroundImage, style, onClick, children}) => {
  return (
    <div
      style={{backgroundImage: `url(${backgroundImage})`, padding: '0px 0px', margin: '0px auto', ...style}} 
      className="jumbotron"
      onClick={onClick}
    >
     {children}
    </div>
  );
}

export default Jumbotron;