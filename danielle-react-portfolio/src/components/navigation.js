import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import Projects from './projects';
import Home from './home';

const Navigation = () => {
    return (
        <div>
            <Router>
                <Navbar>
                    <Nav className="ml-auto">
                        <Nav.Link href="#projects">
                            <Link to="/mywork">Projects</Link>
                        </Nav.Link>
                        <Nav.Link href="#contact">
                            <Link to="/contact">Contact</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route path="/mywork"><Projects /></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Navigation; 