import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import TextEmphasis from '../images/portfolio-textemphasis.png';
import schedulez_screenshot from '../images/schedulez_screenshot.png';
import SectionSeparator from '../images/sectionseparator.png';

const ProjectTwoPage = () => {
    return (
        <Container className="project-container d-flex">
            <img className="project-screenshot" src={schedulez_screenshot} alt="Screenshot of Schedulez Application"></img>
            <h1>Schedulez</h1>
            <img className="section-separator" src={SectionSeparator}></img>
            <div className="project-about">
                <Row>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <p>A full stack employee management application that allows
                              managers and employees to build dynamic and functional
                              schedules around their workday. Completed
                      with three teammates.</p>
                    </Col>
                </Row>
                <Row>
                    <div className="project-buttons">
                        <Button className="app-button">
                            <a href='scheduleez.herokuapp.com/' target='_blank'>
                            </a>Live App</Button>
                        <Button className="code-button">
                            <a href="https://github.com/md0808/schedulez" target='_blank'>Code</a>
                        </Button>
                    </div>
                </Row>
                <Row>
                    <img className="section-separator" src={SectionSeparator}></img>
                </Row>
                <Row>
                    <Col s={12} sm={12} md={8} lg={8} xl={8}>
                        <img src={TextEmphasis} className="text-emphasis"></img>
                        <h2>Goals</h2>
                        <p>My goal was to design an application that was bright and engaging while also simple. Schedulez has many different elements on every page due to the complex nature of scheduling applications, so I kept simplicity and ease of use the main focus of my design.</p>
                    </Col>
                </Row>
                <div>
                    <Row>
                        <Col s={12} sm={12} md={8} lg={8} xl={8}>
                            <img src={TextEmphasis} className="text-emphasis"></img>
                            <h2>My Role</h2>
                            <p>Front-end web developer and designer. Designed a responsive UI and
                      connected to database, developing API routes.</p>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col s={12} sm={12} md={8} lg={8} xl={8}>
                        <div>
                            <img src={TextEmphasis} className="text-emphasis"></img>
                            <h2>Tools</h2>
                            <div>
                                <p>
                                    <strong>Languages Used:</strong> HTML5, CSS, JavaScript
                    </p>
                                <p>
                                    <strong>Frameworks Used:</strong> jQuery, Materialize,
                                    Node.js, Express
                    </p>
                                <p>
                                    <strong>Database:</strong> MySQL and Sequelize
                    </p>

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default ProjectTwoPage;