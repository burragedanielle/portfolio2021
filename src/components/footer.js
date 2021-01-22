import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Resume from "../images/burrage_danielle-resume2021.pdf";
import PhotoMe from "../images/IMG_2757.jpg";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <Container className="footer-container contact-section">
                    <Row>
                        <Col>
                            <img alt="A lovely photograph of Danielle Burrage" src={PhotoMe}></img>
                        </Col>
                        <Col className="contact-content">
                            <h1>Connect <span className="cursive">with</span> Danielle</h1>
                            <div className="contact-type">

                                <a href="mailto: burragedanielle@gmail.com"> <MdEmail></MdEmail></a>
                                <a href="mailto: burragedanielle@gmail.com"><p>burragedanielle@gmail.com</p></a>


                            </div>
                            <div className="contact-type">
                                <a href="https://www.github.com/burragedanielle" target="_blank"><AiFillGithub></AiFillGithub></a>
                                <a href="https://www.github.com/burragedanielle" target="_blank"><p>@burragedanielle</p></a>

                            </div>
                            <div className="contact-type">
                                <a href="https://www.linkedin.com/in/danielleburrage/" target="_blank"> <AiFillLinkedin></AiFillLinkedin></a>
                                <a href="https://www.linkedin.com/in/danielleburrage/" target="_blank">  <p>/in/danielleburrage</p></a>
                            </div>
                            <div className="contact-button">
                                <Button>
                                    <a href={Resume}>Download Resume</a>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        </div >
    )
}

export default Footer;