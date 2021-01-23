import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import TextEmphasis from '../images/portfolio-textemphasis.png';
import allocat_screenshot from '../images/allocat_screenshot.png';
import SectionSeparator from '../images/sectionseparator.png';


const ProjectOnePage = () => {
    return (
        <Container className="project-container d-flex">
            <img className="project-screenshot" src={allocat_screenshot} alt="Screenshot of Allocat Application"></img>
            <h1>Allocat</h1>
            <h3>HTML, CSS, JavaScript, React, Express, Node.js,
                            Bootstrap, Next.js, MySQL and Sequelize</h3>
            <div className="project-about">
                <Row>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <p className="project-intro">A full stack MERN application that simplifies complex
                          projects through task allocation. Completed with
                      four teammates. Front-end web developer and designer. Designed a responsive and
                          dynamic UI using React, custom Bootstrap and JavaScript
                          ES6. Seamlessly connected UI to server-side code and
                      database using Express and API routes, retrieving and rendering data.</p>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} sm={12} md={8} lg={8} xl={8}>
                        <h2>Goals</h2>
                        <p>Due to the complex nature of scheduling applications, Allocat has many different elements on every page. My teammate and I decided to prioritize  simplicity and ease of use in our design.</p>
                    </Col>
                </Row>
                <Row>
                    <div className="project-buttons">
                        <Button className="app-button">
                            <a href='https://allocat.herokuapp.com/' target='_blank'>
                                Live App</a>
                        </Button>
                        <Button className="code-button">
                            <a href='https://github.com/xKingAlex/Allocat' target='_blank'>Code</a></Button>
                    </div>
                </Row>
            </div>
        </Container>
    );
}

export default ProjectOnePage;