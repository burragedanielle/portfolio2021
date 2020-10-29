import React, { Component } from 'react';
import About from './components/aboutme';
import Hero from './components/hero';
import Footer from './components/footer';

class App extends Component {
    render() {
        return (
            <div>
                <Hero />
                <About />
                <Footer />
            </div>

        );
    }
}

export default App; 