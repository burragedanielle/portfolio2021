import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <Jumbotron fluid id="main-landing">
                    <Container className="test-container">
                        <div className="hero-copy">
                            <h2 className="hero-heading-main">Hi! I'm Danielle Burrage - </h2>
                            <h2 className="hero-heading-sub">Web Developer & Designer </h2>
                            <Row>
                                <Col xl={7} lg={7} md={7} xs={11} sm={11}>
                                    <p>I combine my creative eye and technical skill set to develop stunning user interfaces.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} sm={6} lg={4} xl={4}>
                                    <h3>Email:</h3>
                                    <p className="connect-links">burragedanielle@gmail.com</p>
                                </Col>
                                <Col xs={6} sm={6} lg={8} xl={8}>
                                    <h3>GitHub:</h3>
                                    <p className="connect-links">@burragedanielle</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} sm={6} lg={4} xl={4}>
                                    <Button>Download Resume</Button>
                                </Col>
                                <Col xs={6} sm={6} lg={8} xl={8}>
                                    <Button>Connect on LinkedIn!</Button>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Jumbotron>
            </div>
        </div>
    )
};

export default Hero; 