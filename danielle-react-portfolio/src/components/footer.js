import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <Container>
                    <Row className="footer-color">
                        <Col className="contact-info" lg={9}>
                            <Col className="connect-title" xl={4} lg={4} md={4}>Let's Connect</Col>
                            <Col xl={4} lg={4} md={4}>
                                <a href={"mailto:burragedanielle@gmail.com"}><HiOutlineMail /></a>
                            </Col>
                            <Col xl={4} lg={4} md={4}>
                                <a href={"https://github.com/burragedanielle"}><FaGithub /></a>
                            </Col>
                            <Col xl={4} lg={4} md={4}>
                                <a href={"https://www.linkedin.com/in/danielleburrage"}><FaLinkedin /></a>
                            </Col>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Footer;