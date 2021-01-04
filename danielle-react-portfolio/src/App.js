import React, { Component, browserHistory } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap';
import Hero from './components/hero';
import About from './components/aboutme';
import TechSkills from './components/techskills';
import Projects from './components/projects';
import Contact from './components/contact';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
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
                    <Switch>
                        <Route exact path='/'>
                            <Hero />
                            <About />
                            <TechSkills />
                        </Route>
                        <Route name='projects' path='/projects' >
                            <Projects />
                        </Route>
                        <Route name='contact' path='/contact'>
                            <Contact />
                        </Route>
                    </Switch>
                </div >
            </Router >
        );
    }
}

export default App; 