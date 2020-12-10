import React, { Component } from 'react';
import About from './aboutme';
import Hero from './hero';
import Footer from './footer';
import TechSkills from './techskills';
import Navigation from './navigation';

class Home extends Component {
    render() {
        return (
            <div>
                <Hero />
                <About />
                <TechSkills />
                {/* <Footer /> */}
            </div >
        );
    }
}

export default Home;

