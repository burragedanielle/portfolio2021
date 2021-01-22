import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
    HashRouter as Router,
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import Projects from "./projects";
import AboutMePics from '../images/portfolio-about-me-pictures.png';
import Resume from '../images/burrage_danielle-resume2021.pdf';
import TechSkills from '../components/techskills';

const About = ({ history }) => {
    function goTo(location) {
        history.push(`/${location}`)
    }

    return (
        <div>
            <Router>
                <div className="test-container-about">
                    <div className="about-div d-flex">
                        <div className="about-div-one">
                            <Container>
                                <Row className="hello-intro d-flex">
                                    <h3 id="hello-intro">Hi, I'm Danielle!</h3>
                                    <hr></hr>
                                    <p>I am a web developer and designer with award winning experience in digital marketing. Not only do I have the ability to come up with great ideas — I have the technical skills to execute them. </p>
                                    <p>I have a thing for typography, animal print and poodles.</p>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
                <Container>
                    <Row className="about-div-two">
                        <Col md={7} lg={7} xl={7} className="d-flex" id="what-div">
                            <Row>
                                <ul className="about-list">
                                    <li>I have thousands of hours of experience using HTML, CSS, and JavaScript with professional experience developing nationally syndicated and award winning email campaigns for brands.
                            </li>
                                    <li>I earned a certificate in Full Stack Web Development from the University of Kansas. I gained intensive, practical experience building full-stack web applications individually and in teams. From database to DOM, I’ve got it covered.</li>
                                    <li>I ask questions - a lot of questions. I like to know the ‘why’ behind things and the nitty gritty details that others may overlook.</li>
                                    <li>I think and learn fast. My mind is <span className="underline">always </span>moving. As a professional, I’ve been recognized for my ability to learn on the fly and my imaginative approach to problem-solving.</li>
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <TechSkills />
                <Container>


                    <Row className="mid-section">
                        <div className="mid-section-content">
                            <Row><h1><span id="about-line-one">As a web developer and designer,</span></h1></Row>
                            <Row> <h1><span id="about-line-two">I know what it takes to turn your ideas</span></h1></Row>
                            <Row> <h1><span id="about-line-three"> into functional code. </span></h1></Row>
                            <Row className="buttons-about">
                                <Button onClick={() => goTo('projects')}>
                                    See My Work
                                </Button>
                                <Button>
                                    <a href={Resume}>Download My Resume</a>
                                </Button>
                            </Row>
                        </div>
                    </Row>
                </Container>
                <Switch>
                    <Route exact path='/projects'>
                        <Projects />
                    </Route>
                </Switch>
            </Router >
        </div >
    )
};

export default withRouter(About);