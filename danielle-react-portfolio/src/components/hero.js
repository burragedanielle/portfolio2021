import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <Jumbotron fluid>
                    <Container>
                        <h1>Hero container goes here</h1>
                    </Container>
                </Jumbotron>

            </div>
        </div>
    )
};

export default Hero; 