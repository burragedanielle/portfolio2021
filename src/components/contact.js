import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
    return (
        <div>
            <div className="contact-background">

                <div className="contact-section d-flex">
                    <h1>Connect <span className="cursive">with</span> Danielle!</h1>

                    <div className="contact-content">
                        <div className="contact-type">

                            <a href="mailto: burragedanielle@gmail.com"> <MdEmail></MdEmail></a>
                            <a href="mailto: burragedanielle@gmail.com"><p>burragedanielle@gmail.com</p></a>


                        </div>
                        <div className="contact-type">
                            <a href="https://www.github.com/burragedanielle" target="_blank"><AiFillGithub></AiFillGithub></a>
                            <a href="https://www.github.com/burragedanielle" target="_blank"><p>@burragedanielle</p></a>

                        </div>
                        <div className="contact-type">
                            <a href="https://www.linkedin.com/in/danielleburrage/" target="_blank"> <AiFillLinkedin></AiFillLinkedin></a>
                            <a href="https://www.linkedin.com/in/danielleburrage/" target="_blank">  <p>/in/danielleburrage</p></a>
                        </div>
                    </div>
                    <div className="contact-button">
                        <Button>Download My Resume</Button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact; 