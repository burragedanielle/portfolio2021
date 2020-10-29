import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const About = () => {
    return (
        <div>
            <div className="about-div">
                <Container>
                    <Row>
                        <h1>Who I Am</h1>
                    </Row>
                    <Row>
                        <hr />
                        <ul className="about-list">
                            <li><span>I am a developer with the eye of a designer and wit of a marketer.</span> Not only do I have the ability to come up with a great idea — I have the technical skills to execute it. </li>
                            <li>
                                <span>I have over 10,000 hours of experience</span> using <span>HTML, CSS, and JavaScript</span> with professional experience developing nationally syndicated and award winning email campaigns for brands.
                            </li>
                            <li><span>I earned a certificate in Full Stack Web Development</span> from the University of Kansas. I gained intensive, practical experience building full-stack web applications individually and in teams. <span>From database to DOM, I’ve got it covered. </span></li>
                            <li><span> I ask questions - a lot of questions.</span> I like to know the ‘why’ behind things and the nitty gritty details that others may overlook.</li>
                            <li><span>I think and learn fast.</span> My mind is always moving. It has helped me pick up close to a dozen new technologies and frameworks in a less than a year, win fiction writing awards, and teach myself how to speak French. <span>As a web developer, I’ve been recognized for my ability to learn on the fly and my imaginative approach to problem-solving.</span></li>
                        </ul>
                    </Row>
                </Container>
            </div>
        </div>
    )
};

export default About; 