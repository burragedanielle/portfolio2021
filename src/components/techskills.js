import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FaPalette } from "react-icons/fa";
import { BsDisplay } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";
import Aos from 'aos';
import 'aos/dist/aos.css';

const TechSkills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });

    }, []);
    return (
        <div>
            <Container>
                <div className="skills-div">
                    {/* <h2 className="about-hey">Technical</h2>
                    <h3 className="section-intro">Skills</h3> */}
                    <div className="skill-group" data-aos="fade-up">
                        <Row>
                            <Col md={4} lg={4} xl={4}>
                                <div className="circle"></div>
                                <div className="circle_2"></div>
                                <div className="box-skills">
                                    <div className="skill-group">
                                        <BsDisplay className="skill-group-icon" />
                                        <h4 className="skill-title">Front-End</h4>
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
                                        <h4 className="skill-title">Back End</h4>
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
                                        <h4 className="skill-title">Design</h4>
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