import React from 'react';
import "../Styles/About.css"

const defaultProps = {
  text: "Welcome to the forefront of cutting-edge cricket umpiring services, your ultimate destination for an immersive and dynamic officiating experience! Our platform proudly offers a range of services, ensuring that every cricket match is officiated with precision and expertise. With state-of-the-art technology and a user-friendly interface, our virtual umpiring service is designed to cater to cricket enthusiasts of all levels.Picture yourself witnessing crucial decisions in live cricket matches, where every LBW, run-out, and caught-behind moment is adjudicated with the utmost accuracy. Our digital platform goes beyond the conventional umpiring experience; it\'s a dynamic hub for cricket fans to engage with the game, virtually participate, and foster a community around their love for cricket"
};

const Text = (props) => {
  return (
    <div className='card-about text-para'>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;