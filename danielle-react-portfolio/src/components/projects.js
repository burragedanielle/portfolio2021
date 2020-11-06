import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProjectOnePage from './projectonepage';
import ProjectTwoPage from './projecttwopage';
import ProjectThreePage from './projectthreepage';

const Projects = () => {
    return (
        <Router>
            <div>
                <div className="projects-section">
                    <h1>Projects</h1>
                    <Container>
                        <Row>
                            <Col><Link to="/project-one">Project 1</Link></Col>
                            <Col><Link to="/project-two">Project 2</Link></Col>
                            <Col><Link to="/project-three">Project 3</Link></Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Switch>
                <Route path="/project-one">
                    <ProjectOnePage />
                </Route>
                <Route path="/project-two">
                    <ProjectTwoPage />
                </Route>
                <Route path="/project-three">
                    <ProjectThreePage />
                </Route>
            </Switch>
        </Router>
    )

}

export default Projects;