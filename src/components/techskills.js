import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { AiOutlineHtml5, AiOutlineSketch } from "react-icons/ai";
import { FaSass, FaReact, FaNodeJs, FaBootstrap, FaPalette } from "react-icons/fa";
import { DiMongodb, DiJavascript1, DiPhotoshop } from "react-icons/di";
import { HiColorSwatch } from "react-icons/hi";
import { VscTextSize } from "react-icons/vsc";
import { BsDisplay } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";

const TechSkills = () => {
    return (
        <div>
            <Container>
                <div className="skills-div">
                    <h1>My Skills</h1>
                    <div className="skill-group">
                        <Row>
                            <Col md={4} lg={4} xl={4}>
                                <div className="circle"></div>
                                <div className="circle_2"></div>
                                <div className="box-skills">
                                    <div className="skill-group">
                                        <BsDisplay className="skill-group-icon" />
                                        <h2 className="skill-title">Front-End</h2>
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>React</li>
                                            <li>Sass</li>
                                            <li>jQuery</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} lg={4} xl={4}>
                                <div className="circle"></div>
                                <div className="circle_2"></div>
                                <div className="box-skills">
                                    <div className="skill-group">
                                        <AiFillDatabase className="skill-group-icon" />
                                        <h2 className="skill-title">Back End</h2>
                                        <ul>
                                            <li>NodeJS</li>
                                            <li>MongoDB</li>
                                            <li>RESTful APIs</li>
                                            <li>Express</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} lg={4} xl={4}>
                                <div className="circle"></div>
                                <div className="circle_2"></div>
                                <div className="box-skills">
                                    <div className="skill-group">
                                        <FaPalette className="skill-group-icon" />
                                        <h2 className="skill-title">Design</h2>
                                        <ul>
                                            <li>Adobe Photoshop</li>
                                            <li>Sketch</li>
                                            <li>Color Theory</li>
                                            <li>Typography</li>
                                            <li>Visual Design</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div >
    );
}

export default TechSkills; 