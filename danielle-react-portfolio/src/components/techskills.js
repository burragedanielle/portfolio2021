import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineHtml5, AiOutlineSketch } from "react-icons/ai";
import { FaSass, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { DiMongodb, DiJavascript1, DiPhotoshop } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { HiColorSwatch } from "react-icons/hi";
import { VscTextSize } from "react-icons/vsc";

const TechSkills = () => {
    return (
        <div>
            <div className="skills-div">
                <Container>
                    <Row className="skills-section section-title">
                        <h1>My Skills</h1>
                    </Row>
                    <Row className="skills-section">
                        <h2>Front-End</h2>
                    </Row>
                    <Row className="skills-section skills">
                        <ul>
                            <li><AiOutlineHtml5 /><h3>HTML</h3></li>
                            <li><DiJavascript1 /><h3>JavaScript</h3></li>
                            <li><FaSass /><h3>Sass</h3></li>
                            <li><FaReact /><h3>React</h3></li>
                            <li><FaBootstrap /><h3>Bootstrap</h3></li>
                        </ul>
                    </Row>
                    <Row className="skills-section">
                        <h2>Back End</h2>
                    </Row>
                    <Row className="skills-section skills">
                        <ul>
                            <li><FaNodeJs /><h3>NodeJS</h3></li>
                            <li><DiMongodb /><h3>MongoDB</h3></li>
                        </ul>
                    </Row>
                    <Row className="skills-section">
                        <h2>Design</h2>
                    </Row>
                    <Row className="skills-section skills">
                        <ul>
                            <li><DiPhotoshop /><h3>Photoshop</h3></li>
                            <li><AiOutlineSketch /><h3>Sketch</h3></li>
                            <li><FiFigma /><h3>Figma</h3></li>
                            <li><HiColorSwatch /><h3>Color Theory</h3></li>
                            <li><VscTextSize /><h3>Typography</h3></li>
                        </ul>
                    </Row>
                    <Row className="skills-section">
                        <h2>Other Skills</h2>
                    </Row>
                    <Row className="skills-section">
                        <ul>
                            <Col>
                                <li>Visual Design</li>
                                <li>Responsive Design</li>
                                <li>SEO Optimization</li>
                            </Col>
                            <Col>
                                <li>jQuery</li>
                                <li>Express</li>
                                <li>Mongoose</li>

                            </Col>
                            <Col>
                                <li>API Development</li>
                                <li>RESTful APIs</li>

                            </Col>
                        </ul>
                    </Row>
                </Container>
            </div>
        </div >
    );
}

export default TechSkills; 