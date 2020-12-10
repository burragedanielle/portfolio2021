import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/home';
import Projects from './components/projects';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar className='sticky'>
                        <Nav className="mr-auto">
                            <Nav.Link>
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/projects">Projects</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/contact">Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                    <Route exact path='/' component={Home} />
                    <Route path='/projects' component={Projects} />
                </div >
            </Router>
        );
    }
}

export default App; 