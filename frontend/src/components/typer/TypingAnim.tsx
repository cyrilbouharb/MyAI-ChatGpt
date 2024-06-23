import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Experience Cyrils own creation: a ChatGPT clone built with precision and passion. 🤖',
    1000,
    'Explore the world of AI with Cyrils ChatGPT Clone, your new intelligent conversational partner.',
    1000,
    'See how Cyril has harnessed the power of the MERN stack to build a responsive and intuitive AI chat system. 👨‍💻',
    1000,
    'Every line of code in Cyrils ChatGPT Clone is crafted with care for an exceptional user experience. ✨',
    1000,
  ]}
  speed={50}
  style={{
    fontSize: "40px",
    color: "white",
    display: "flex",
    textShadow: "1px 1px 20px #000",
    alignItems:'center',
    justifyContent:'center',
    height: "400px"
  }}
  repeat={Infinity}
/>
  )
};

export default TypingAnim;
