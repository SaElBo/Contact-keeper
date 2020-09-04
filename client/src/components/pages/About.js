import React from "react";

const About = () => {
  return (
    <div style={style}>
      <h1>About this App</h1>
      <p className="my-1">
        This is a full stack react app for keeping contacts
      </p>
    </div>
  );
};

const style = {
  display: "flex",
  justifyContent: 'center',
  alignItems : 'center',
  flexDirection: 'column',
  marginTop: '3rem'
}

export default About;
