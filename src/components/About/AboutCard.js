import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arka Ghosh</span> from{" "}
            <span className="purple">Kolkata, India.</span>
            <br />
            I am currently working as an <b className="purple">Assistant System Engineer</b> at Capsitech, 
            where I build and deploy <b className="purple">Machine Learning</b> and{" "}
            <b className="purple">Computer Vision</b> solutions.
            <br />
            <br />
            I have completed my{" "}
            <b className="purple">B.Tech in Computer Science and Engineering (AI & ML)</b> 
            from Future Institute of Technology, Kolkata (MAKAUT) in 2024 with a CGPA of 8.81.
            <br />
            <br />
            Apart from coding and research, here are some activities I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring AI/ML Research Papers
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing and sharing tech content
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games & Watching Sci-fi
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Leveraging AI to solve real-world problems and build impactful systems!"{" "}
          </p>
          <footer className="blockquote-footer">Arka Ghosh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
