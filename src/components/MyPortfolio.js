import React from 'react';
import Header from './Header';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const MyPortfolio = () => {
    
    const experienceRef = React.createRef();
    const projectRef = React.createRef();
    const skillsRef = React.createRef();
    const contactRef = React.createRef();

    return (
        <>
            <Header 
                experienceRef={experienceRef}
                projectRef={projectRef}
                skillsRef={skillsRef}
                contactRef={contactRef}
            />
            <div className="main">
                <div className="experience target" id="2" ref={experienceRef}>
                    <div className="title-area white-text teal">
                        experience
                    </div>
                    <div className="container">
                        <Experience />
                    </div>
                </div>
                <div className="projects target" id="3"  ref={projectRef}>
                    <div className="title-area white-text teal">
                        projects <span style={{fontSize: "20px"}}>(최신순)</span>   
                    </div>
                    <div className="container">
                        <Projects />
                    </div>
                </div>
                <div className="skills target" id="4" ref={skillsRef}>
                    <div className="title-area white-text teal">
                        skills
                    </div>
                    <div className="container">
                        <Skills />
                    </div>
                </div>
                <div className="contact target" id="6" ref={contactRef}>
                    <div className="title-area white-text teal">
                        contact
                    </div>
                    <div className="container">
                        <Contact />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPortfolio;