import React, { Component, browserHistory } from 'react';
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

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <div>
                    <Navbar className='sticky'>
                        <Nav className="mr-auto">
                            <Nav.Link>
                                <Link to="/portfolio2021/">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/portfolio2021/projects">Projects</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/portfolio2021/contact">Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                    <Switch>
                        <Route exact path='/portfolio2021/'>
                            <Hero />
                            <About />
                            <TechSkills />
                        </Route>
                        <Route name='projects' path='/portfolio2021/projects' >
                            <Projects />
                        </Route>
                        <Route name='contact' path='/portfolio2021/contact'>
                            <Contact />
                        </Route>
                    </Switch>
                </div >
            </Router >
        );
    }
}

export default App; 