import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Projects from "./projects";
import AboutMePics from '../images/portfolio-about-me-pictures.png';

const About = ({ history }) => {
    function goTo(location) {
        history.push(`/${location}`)
    }

    return (
        <div>
            <Router>
                <div className="about-div">
                    <Container>
                        <Row>
                            <Col md={5} lg={5} xl={5} className="about-me-pics-container">
                                <img className="about-me-pics" src={AboutMePics}></img>
                            </Col>
                            <Col md={7} lg={7} xl={7}>
                                <Row>
                                    <h2 id="about-hey">Hey There!</h2>
                                </Row>
                                <Row>
                                    <h1>I'm Danielle!</h1>
                                </Row>
                                <Row>
                                    I am a web developer and digital designer with award winning experience in digital marketing. Not only do I have the ability to come up with great ideas — I have the technical skills to execute them.</Row>
                                <Row>
                                    <ul className="about-list">
                                        <li>I have over 10,000 hours of experience using HTML, CSS, and JavaScript with professional experience developing nationally syndicated and award winning email campaigns for brands.
                            </li>
                                        <li>I earned a certificate in Full Stack Web Development from the University of Kansas. I gained intensive, practical experience building full-stack web applications individually and in teams. From database to DOM, I’ve got it covered.</li>
                                        <li>I ask questions - a lot of questions. I like to know the ‘why’ behind things and the nitty gritty details that others may overlook.</li>
                                        <li>I think and learn fast. My mind is <span className="underline">always </span>moving. As a professional, I’ve been recognized for my ability to learn on the fly and my imaginative approach to problem-solving.</li>
                                    </ul>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="mid-section">
                            <div className="mid-section-content">
                                <Row><h1><span id="about-line-one">As a professional web developer,</span></h1></Row>
                                <Row> <h1><span id="about-line-two">I know what it takes to turn</span></h1></Row>
                                <Row> <h1><span id="about-line-three">your ideas into functional code. </span></h1></Row>
                                <Row className="buttons-about">

                                    <Button onClick={() => goTo('projects')}>
                                        See My Work
                                </Button>
                                    <Button>
                                        Download My Resume
                                    </Button>
                                </Row>
                            </div>
                        </Row>
                    </Container>
                </div>
                <Switch>
                    <Route exact path='/projects'>
                        <Projects />
                    </Route>
                </Switch>
            </Router>
        </div >
    )
};

export default withRouter(About);