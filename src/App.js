import React, { Component, hashHistory } from 'react';
import {
    HashRouter as Router,
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
import Footer from './components/footer';

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
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
                            <Footer />
                        </Route>
                        <Route name='/projects' path='/projects' >
                            <Projects />
                        </Route>
                        <Route name='/contact' path='/contact'>
                            <Contact />
                        </Route>
                    </Switch>
                </div >
            </Router >
        );
    }
}

export default App; 