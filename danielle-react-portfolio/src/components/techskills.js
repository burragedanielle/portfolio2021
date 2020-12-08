import React from "react";
import { AiOutlineHtml5, AiOutlineSketch } from "react-icons/ai";
import { FaSass, FaReact, FaNodeJs, FaBootstrap, FaPalette } from "react-icons/fa";
import { DiMongodb, DiJavascript1, DiPhotoshop } from "react-icons/di";
import { HiColorSwatch } from "react-icons/hi";
import { VscTextSize } from "react-icons/vsc";
import { BsDisplay } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";

const TechSkills = () => {
    return (
        <div>
            <div className="skills-div">
                <h1>My Skills</h1>
                <div className="skill-group">
                    <BsDisplay className="skill-group-icon" />
                    <h2 className="skill-title">Front-End</h2>
                    <div className="skill-items">
                        <ul>
                            <li><AiOutlineHtml5 className="skill-icon" /><p>HTML</p></li>
                            <li><DiJavascript1 className="skill-icon" /><p>JavaScript</p></li>
                            <li><FaSass className="skill-icon" /><p>Sass</p></li>
                            <li><FaReact className="skill-icon" /><p>React</p></li>
                            <li><FaBootstrap className="skill-icon" /><p>Bootstrap</p></li>
                        </ul>
                    </div>
                </div>
                <div className="skill-group">
                    <AiFillDatabase className="skill-group-icon"></AiFillDatabase>
                    <h2 className="skill-title">Back End</h2>
                    <div className="skill-items">
                        <ul>
                            <li><FaNodeJs className="skill-icon" /><p>NodeJS</p></li>
                            <li><DiMongodb className="skill-icon" /><p>MongoDB</p></li>
                        </ul>
                    </div>
                </div>
                <div className="skill-group">
                    <FaPalette className="skill-group-icon"></FaPalette>
                    <h2 className="skill-title">Design</h2>
                    <div className="skill-items">
                        <ul>
                            <li><DiPhotoshop className="skill-icon" /><p>Photoshop</p></li>
                            <li><AiOutlineSketch className="skill-icon" /><p>Sketch</p></li>
                            <li><HiColorSwatch className="skill-icon" /><p>Color Theory</p></li>
                            <li><VscTextSize className="skill-icon" /><p>Typography</p></li>
                        </ul>
                    </div>
                </div>
                {/* <div className="skill-group">
                    <h2 className="skill-title">Other Skills</h2>
                    <div>
                        <ul>
                            <li>Visual Design</li>
                            <li>Responsive Design</li>
                            <li>RESTful APIs</li>
                            <li>Express</li>
                            <li>SEO Optimization</li>
                            <li>jQuery</li>
                            <li>API Development</li>
                            <li>Mongoose</li>
                        </ul>
                    </div>
                </div> */}
            </div >
        </div >
    );
}

export default TechSkills; 