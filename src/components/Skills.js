import React, { memo } from 'react';

const Skills = memo(() => {
    const skills = [
        {
            num: 1,
            title: 'HTML',
            skillLists: [
                {
                    title: 'HTML5',
                    image: 'html5.png'
                },
                {
                    title: 'JSX',
                    image: 'react.png'
                },
            ]
        },
        {
            num: 2,
            title: 'CSS',
            skillLists: [
                {
                    title: 'CSS3',
                    image: 'css3.png'
                },
                {
                    title: 'SASS',
                    image: 'sass.png'
                },
                {
                    title: 'Styled Components',
                    image: 'styledcomponents.png'
                },
                {
                    title: 'Bootstrap',
                    image: 'bootstrap.png'
                },
                {
                    title: 'Materialize',
                    image: 'materialize.png'
                },
                {
                    title: 'Ant Design',
                    image: 'antdesign.png'
                },
            ]
        },
        {
            num: 3,
            title: 'Javascript',
            skillLists: [
                {
                    title: 'Javascript',
                    image: 'javascript.png'
                },
                {
                    title: 'jQuery',
                    image: 'jquery.png'
                },
                {
                    title: 'React',
                    image: 'react.png'
                },
                {
                    title: 'React-Redux',
                    image: 'redux.png'
                },
                {
                    title: 'Redux-Saga',
                    image: 'reduxsaga.png'
                },
                {
                    title: 'Apollo-Client',
                    image: 'apollo.png'
                },
                {
                    title: 'Typescript',
                    image: 'typescript.png'
                },
            ]
        },
        {
            num: 4,
            title: 'Other',
            skillLists: [
                {
                    title: 'Webpack',
                    image: 'webpack.png'
                },
                {
                    title: 'Babel',
                    image: 'babel.png'
                },
                {
                    title: 'PHP',
                    image: 'php.png'
                },
                {
                    title: 'Github',
                    image: 'github.png'
                },
                {
                    title: 'Photoshop',
                    image: 'photoshop.png'
                },
            ]
        }
    ]

    return (
        <>
            {skills.map((skill, i) => {
                return (
                    <div className="card" key={i}>
                        <div className="card-content">
                            <h4 className="brown-text light">{skill.title}</h4>
                            <div className="row text-center">
                                {skill.skillLists.map((skill, i) => {
                                    return (
                                        <div className="col s4 m2" key={i}>
                                            <img alt="" src={require(`../images/${skill.image}`)} className="responsive-img" />{skill.title}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
});

export default Skills;