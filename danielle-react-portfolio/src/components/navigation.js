import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import Projects from './projects';

const Navigation = () => {
    return (
        <div>
            <Router>
                <Navbar>
                    <Nav className=" mr-auto">
                        <Nav.Link>
                            <Link to="/mywork">Projects</Link>
                        </Nav.Link>
                        <Nav.Link>
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