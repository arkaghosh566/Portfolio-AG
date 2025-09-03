import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import GAIT from "../../Assets/Projects/GAIT.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Employee Tracking System"
              description="Developed a computer vision-based employee tracking system for real-time monitoring of workplace activity, improving operational oversight and accountability."
              ghLink="https://github.com/yourusername/employee-tracking" // optional
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Person Counting System"
              description="Developed a deep learning-based person counting system for crowded environments using ResNet50 with FPN backbone. Optimized the model for real-time performance and improved detection accuracy in dense scenes."
              ghLink="https://github.com/yourusername/person-counting"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GAIT}
              isBlog={false}
              title="Gait Analysis System"
              description="Extracted high-quality silhouettes for gait analysis by integrating YOLOv8 with SAM. Preprocessed frames to generate accurate human masks, enabling gait feature extractions such as GEI and HOG."
              ghLink="https://github.com/yourusername/gait-analysis"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Head Detection Pipeline"
              description="Implemented a head detection pipeline using YOLOv8 trained on a custom dataset of colored and black-and-white head images. Applied ensemble learning with multiple YOLOv8 variants to boost prediction robustness."
              ghLink="https://github.com/yourusername/head-detection"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Multi-Object Tracking Research"
              description="Researched and implemented tracking algorithms including SORT, DeepSORT, ByteTrack, BoT-SORT, and OC-SORT. Evaluated their performance across diverse surveillance scenarios to enhance tracking accuracy and robustness."
              ghLink="https://github.com/yourusername/multi-object-tracking"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
