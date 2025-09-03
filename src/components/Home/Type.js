import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Aspiring Machine Learning Engineer",
          "Computer Vision Enthusiast",
          "Deep Learning Practitioner",
          "Generative AI Explorer",
          "NLP Enthusiast",
          "End-to-End ML Solutions Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
