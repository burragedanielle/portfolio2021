import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class ButtonNavigation extends Component {
    render() {
        return (
            <Link to='/projects'>
                <Button>
                    See My Work
                </Button>
            </Link>
        );
    }
}

export default ButtonNavigation;