import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import schedulez_screenshot from '../images/SchedulezScreenshot.png';

const ProjectTwoPage = () => {
    return (
        <Container>
            <img src={schedulez_screenshot} alt="Schedulez Application"></img>
            <h1>Schedulez</h1>
            <div className="project-about">
                <div>
                    <h2>About</h2>
                    <p>A full stack employee management application that allows
                      managers and employees to build dynamic and functional
                      schedules around their workday. Completed
                      with three teammates.</p>
                </div>
                <div>
                    <h2>Project Features</h2>
                    <p>Para</p>
                </div>
                <div>
                    <h2>Goals and Objectives</h2>
                    <p>My goal was to design an application that was bright and engaging while also simple. Schedulez has many different elements on every page due to the complex nature of scheduling applications, so I kept simplicity and ease of use the main focus of my design.</p>
                </div>
                <div>
                    <h2>My Role</h2>
                    <p>Front-end web developer and designer. Designed a responsive UI and
                      connected to database, developing API routes. </p>
                </div>
            </div>
            <div className="project-screenshots">
            </div>
            <div className="project-details">
                <div>
                    <h2>Technology Used</h2>
                    <p>
                        <strong>Languages Used:</strong> HTML5, CSS, JavaScript
                    </p>
                    <p>
                        <strong>Frameworks Used:</strong> jQuery, Materialize,
                        Node.js, Express
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

export default ProjectTwoPage;