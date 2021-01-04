import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextEmphasis from '../images/portfolio-textemphasis.png';
import Button from 'react-bootstrap/Button';

const ProjectThreePage = () => {
    return (
        <Container className="project-container d-flex">
            {/* <img className="project-screenshot" src={schedulez_screenshot} alt="Screenshot of Schedulez Application"></img> */}
            <h1>RESTful API Petshop</h1>
            <div className="project-about">
                <Row>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <div>
                            <img src={TextEmphasis} className="text-emphasis"></img>
                            <h2>About</h2>
                            <p>A MERN mock e-commerce application. Allows users to log-in or utilize “guest-mode”; app retrieves products from database and renders to front end with ability to sort by product category. Completed as an individual project.</p>
                        </div>
                    </Col>
                </Row>
                {/* <Row>
                    <Col s={12} sm={12} md={8} lg={8} xl={8}>
                        <div>
                            <img src={TextEmphasis} className="text-emphasis"></img>
                            <h2>Features</h2>
                            <p>Para</p>
                        </div>
                    </Col>
                </Row> */}
                <Row>
                    <Col s={12} sm={12} md={8} lg={8} xl={8}>
                        <img src={TextEmphasis} className="text-emphasis"></img>
                        <h2>Goals</h2>
                        <p>To design an e-commerce site with mobile users in mind, focusing on ease of use and compelling visuals. I wanted to challenge myself in developing a back-end where I could add, delete, update and store information, and a front-end to display that content.</p>
                    </Col>
                </Row>
            </div>
            <div className="project-details">
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
                    {/* <div>
                    <h2>Colors</h2>
                    <p>Para</p>
                </div>
                <div>
                    <h2>Fonts</h2>
                    <p>Para</p>
                </div> */}
                </div>
                <div className="project-buttons">
                    <Button className="app-button">Live App</Button>
                    <Button className="code-button">Code</Button>
                </div>
            </div>
        </Container>
    );
}

export default ProjectThreePage;