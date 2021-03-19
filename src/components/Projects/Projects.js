import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import notepad from "../../Assets/Projects/notepad.png";
import coming_soon from "../../Assets/Projects/coming_soon.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="crimson">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notepad}
              isBlog={false}
              title="Text Editor Using Python"
              description="Create real text editor using python programming language and tkinter GUI library. This computer software is cross platform and contains all necessary features that every text editor must have. "
              link="https://github.com/agrawalmohit1234/Text_Editor_Using_Python"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coming_soon}
              isBlog={false}
              title="Social Media App"
              description="Explore the capabilities of the MERN stack by implementing social media features, such as post sharing, liking, commenting, following friends, and an aggregated newsfeed."
              link="https://github.com/agrawalmohit1234/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coming_soon}
              isBlog={false}
              title="Classroom App"
              description="Buiding a Web-Based Classroom Application, focuses on building a simple online classroom application by extending the MERN stack application. This classroom application will support multiple user roles, the addition of course content and lessons, student enrollments, progress tracking, and course enrollment statistics."
              link="https://github.com/agrawalmohit1234"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
