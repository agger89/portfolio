import React from 'react';
import Header from './Header';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';

const MyPortfolio = () => {
    
    const aboutRef = React.createRef();
    const experienceRef = React.createRef();
    const projectRef = React.createRef();
    const skillsRef = React.createRef();
    const educationRef = React.createRef();
    const contactRef = React.createRef();

    return (
        <>
            <Header 
                aboutRef={aboutRef}
                experienceRef={experienceRef}
                projectRef={projectRef}
                skillsRef={skillsRef}
                educationRef={educationRef}
                contactRef={contactRef}
            />
            <div className="main">
                <div className="about target" id="1" ref={aboutRef}>
                    <div className="title-area white-text teal">
                        about
                    </div>
                    <div className="container flow-text">
                        <h3>협업 및 교육에 대한 열정을 지닌 임무 중심의 프론트엔드 개발자.</h3>
                        <p>
                            저는 항상 저에게 의미있는 기회와 도전을 모색합니다. 
                            {window.innerWidth >= 1200 ? <br /> : " "}
                            개발 스터디 모임 참여를 좋아하고, 새로운 언어에 대한 끊임없는 학습을 통해 성장하는 개발자입니다.
                        </p>
                        <div className="bottom-title">
                            <strong>Current Focus</strong>: <span>NextJS(SSR, SEO, Code Splitting)</span> // <span>React Hooks</span> // <span>React Styled Components</span>
                        </div>
                    </div>
                </div>
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
                <div className="education target" id="5" ref={educationRef}>
                    <div className="title-area white-text teal">
                        education
                    </div>
                    <div className="container">
                        <Education />
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