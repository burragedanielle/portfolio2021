import React, { Component } from 'react';
import About from './aboutme';
import Hero from './hero';
import Footer from './footer';
import TechSkills from './techskills';
import Navigation from './navigation';
import Projects from './projects';

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Hero />
                <About />
                <TechSkills />
                <Projects />
                {/* <Footer /> */}
            </div >
        );
    }
}

export default Home;

