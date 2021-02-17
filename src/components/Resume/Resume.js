import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Raj_Agrawal_Mohit_Resume.pdf";

function Resume() {
  const uri = "https://vercel-backend-api-for-portfolio.vercel.app/ranks";
  const [hackerrank, upadteHackerank] = useState(158115);
  const [sem, upadateSem] = useState(4);
  const [cgpa, upadteCgpa] = useState(7.0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteHackerank(res.data.message[0].hackerrank);
        upadteCgpa(res.data.message[1].cgpa);
        upadateSem(res.data.message[2].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Smart India Hackathon"
              date="Feb 2020 - August 2020"
              content={[
                " Problem Statement :- PCI index calculation using computer vision. Top 5 teams were selected for finals.",
                " Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
            <Resumecontent
              title="Frontend and Backend Developer - Smart Room Ventilator, IIITDM Jabalpur"
              date="Feb 2020 - August 2020"
              content={[
                " Real time monitoring the quality of air and analyzing the data on an web app and also control device features like (ON/OFF, Notification, Fan Speed etc.) using web app.",
                " Sponsored by DIC, MHRD, Govt. Of India and Mentor by Dean of Discipline and Dean of Academic",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="AI Exhibition Coordinator  [ INVICTA'20 Technical Fest of IIITDM Jabalpur ]"
              content={[
                "Worked on a labeling image dataset and coordinate fest",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Electronic and Communication [ PDPM IIITDM ] "
              date="2018 - Present"
              content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD [Manav Bharti National Public School, Gaya]"
              date="2015 - 2017"
              content={["Precentage: 82%"]}
            />
            <Resumecontent
              title="10TH BOARD [Holy Public School, Gaya] "
              date="2011 - 2015"
              content={["Precentage: 90%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in HackerRank  ${hackerrank}`,
                "In Science Olympiad Foundation secured 2nd in state",
                "Participant in IBM Hackathon 2019",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
