import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextEmphasis from '../images/portfolio-textemphasis.png';

const ProjectOnePage = () => {
    return (
        <Container>
            <h1>Allocat</h1>
            <div className="project-about">
                <Row>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <div>
                            <img src={TextEmphasis} className="text-emphasis"></img>
                            <h2>About</h2>
                            <p>A full stack MERN application that simplifies complex
                              projects through task allocation. Completed with
                      four teammates.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} sm={12} md={8} lg={8} xl={8}>
                        <div>
                            <img src={TextEmphasis} className="text-emphasis"></img>
                            <h2>Features</h2>
                            <p>Para</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} sm={12} md={8} lg={8} xl={8}>
                        <img src={TextEmphasis} className="text-emphasis"></img>
                        <h2>Goals</h2>
                        <p>Due to the complex nature of scheduling applications, Allocat has many different elements on every page. My teammate and I decided to prioritize  simplicity and ease of use in our design.</p>
                    </Col>
                </Row>
                <div>
                    <Row>
                        <Col s={12} sm={12} md={8} lg={8} xl={8}>
                            <img src={TextEmphasis} className="text-emphasis"></img>
                            <h2>My Role</h2>
                            <p>Front-end web developer and designer. Designed a responsive and
                              dynamic UI using React, custom Bootstrap and JavaScript
                              ES6. Seamlessly connected UI to server-side code and
                      database using Express and API routes, retrieving and rendering data. </p>
                        </Col>
                    </Row>

                </div>
            </div>
            <div className="project-screenshots">
            </div>
            <div className="project-details">
                <div>
                    <img src={TextEmphasis} className="text-emphasis"></img>
                    <h2>Tools</h2>
                    <p>
                        <strong>Languages Used:</strong> JavaScript, HTML, CSS
                    </p>
                    <p>
                        <strong>Frameworks Used:</strong> React, Express, Node.js,
                        Bootstrap, Next.js,
                    </p>
                    <p>
                        <strong>Database:</strong> MySQL and Sequelize
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
        </Container>
    );
}

export default ProjectOnePage;