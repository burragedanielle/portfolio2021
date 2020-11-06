import React, { Component } from 'react';
import About from './components/aboutme';
import Hero from './components/hero';
import Footer from './components/footer';
import TechSkills from './components/techskills';
import Projects from './components/projects';

class App extends Component {
    render() {
        return (
            <div>
                <Hero />
                <About />
                <TechSkills />
                <Projects />
                <Footer />
            </div>

        );
    }
}

export default App; 