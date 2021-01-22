import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Resume from '../images/burrage_danielle-resume2021.pdf';

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <Jumbotron fluid id="main-landing">
                    <Container className="test-container">
                        <div className="hero-copy">
                            <h2 className="hero-heading-main">Danielle Burrage </h2>
                            <h3 className="hero-heading-sub">Web Design</h3>

                            <p>Combining my creative eye and technical skill set to deliver stunning user interfaces.</p>
                        </div>
                    </Container>
                </Jumbotron>
            </div>
        </div>
    )
};

export default Hero; 