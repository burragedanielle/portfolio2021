import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import ProjectOnePage from './projectonepage';
import ProjectTwoPage from './projecttwopage';
import ProjectThreePage from './projectthreepage';
import allocat_screenshot from '../images/allocat_screenshot.png';
import schedulez_screenshot from '../images/schedulez_screenshot.png';
import petshop_screenshots from '../images/petshop_screenshots.png';

const Projects = () => {

    return (
        <Router>
            <div>
                <div className="projects-navigation">
                </div>
            </div>
            <Switch>
                <Route name='projects' exact path='/projects'>
                    <div className="projects-section">
                        <Container>
                            <Row>
                                <h1>My Projects</h1>
                            </Row>
                            <Row className="project-navigation">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={allocat_screenshot} />
                                        <Card.Body>
                                            <Card.Subtitle className="mb-2 text-muted">
                                                React, MERN Stack
                                            </Card.Subtitle>
                                            <Card.Text>
                                                A full stack MERN application that simplifies complex projects through task allocation.
                                            </Card.Text>
                                            <Link to="/projects/project-one">
                                                <Button className="button-test">

                                                    Learn More

                                            </Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={schedulez_screenshot} />
                                        <Card.Body>
                                            <Card.Subtitle className="mb-2 text-muted">
                                                Web Design, RESTful API
                                            </Card.Subtitle>
                                            <Card.Text>
                                                A full stack employee management application that allows managers and employees to build dynamic and functional schedules around their workday.
                                            </Card.Text>
                                            <Link to="/projects/project-two">
                                                <Button className="button-test">
                                                    Learn More
                                            </Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="project-navigation">
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={petshop_screenshots} />
                                        <Card.Body>
                                            <Card.Subtitle className="mb-2 text-muted">
                                                Node, Web Design, RESTful API
                                            </Card.Subtitle>
                                            <Card.Text>
                                                A concept e-commerce application with a pet shop theme. App retrieves products from Mongo database and renders to front end with ability to sort by product category.
                                            </Card.Text>
                                            <Link to="/projects/project-three">
                                                <Button className="button-test">
                                                    Learn More
                                            </Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Route>
                <Route name='project-one' exact path='/projects/project-one' component={ProjectOnePage} />
                <Route name='project-two' path='/projects/project-two' component={ProjectTwoPage} />
                <Route name='project-three' path='/projects/project-three' component={ProjectThreePage} />
            </Switch>
        </Router >
    );
}

export default withRouter(Projects);

