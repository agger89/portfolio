import React, { memo } from 'react';

const Education = memo(() => {
    const educations = [
        {
            num: 1,
            school: '한국항공전문학교',
            link: 'http://www.kac.ac.kr',
            location: '서울시 동대문구',
            department: '항공정비과'
        },
        {
            num: 2,
            school: '세명컴퓨터고등학교',
            link: 'http://www.smc.hs.kr',
            location: '서울시 은평구',
            department: '멀티미디어과'
        }
    ]

    return (
        <>
            <div className="row">
                {educations.map((education, i) => {
                    return (
                        <div className="col s12 m6" key={i}>
                            <div className="card">
                                <div className="card-content">
                                    <p>
                                        <span className="card-title">
                                            <a href={education.link} target="_blank" className="teal-text hoverline">{education.school}</a>
                                        </span>
                                    </p>
                                    <p className="brown-text">{education.location}</p>
                                    <ul>
                                        <li>{education.department}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )    
                })}
            </div>
        </>
    )
});

export default Education;