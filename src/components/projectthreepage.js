import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextEmphasis from '../images/portfolio-textemphasis.png';
import Button from 'react-bootstrap/Button';
import restapi_screenshot from '../images/petshop_screenshots.png';
import SectionSeparator from '../images/sectionseparator.png';

const ProjectThreePage = () => {
    return (
        <Container className="project-container d-flex">
            <img className="project-screenshot" src={restapi_screenshot} alt="Screenshot of Schedulez Application"></img>
            <h1>RESTful API Petshop</h1>
            <img className="section-separator" src={SectionSeparator}></img>
            <div className="project-about">
                <Row>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <p>A MERN mock e-commerce application. App retrieves products from database and renders to front end with ability to sort by product category. Completed as an individual project.</p>
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
                        <p>To design an e-commerce site with mobile users in mind, focusing on ease of use and compelling visuals. I wanted to challenge myself in developing a back-end where I could add, delete, update and store information, and a front-end to display that content.</p>
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
                                    <strong>Languages Used:</strong> HTML, CSS, JavaScript
                    </p>
                                <p>
                                    <strong>Frameworks Used:</strong> jQuery, Bootstrap
                    </p>
                                <p>
                                    <strong>Backend:</strong> MongoDB, Node.js, Express, MySQL
                    </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default ProjectThreePage;