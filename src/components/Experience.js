import React, { memo, useState } from 'react';

const Experience = memo(() => {
    const contents = [
        {
            num: 1,
            image: 'neuralbc.jpg',
            company: 'Neural BC',
            link: 'http://www.neuralbc.com',
            position: 'Front-End Developer',
            workTitle: '프론트엔드 개발',
            workLists: [
                {
                    list: '서비스중인 2개의 프로젝트 프론트 개발'
                },
                {
                    list: 'webpack 초기 셋팅'
                },
                {
                    list: 'component 초기 셋팅'
                },
                {
                    list: 'React-Redux로 동기적 state 관리'
                },
                {
                    list: 'react-intl 패키지로 4개 언어 적용'
                },
                {
                    list: 'Tools: HTML // SCSS // JS // React, React-Redux'
                }
            ],
            date: '2018.10 - 2019.04 | 서울시 강남구'
        },
        {
            num: 2,
            image: 'starship.jpg',
            company: 'Starship Vending-machine corp.',
            link: 'https://www.insertcoin.me',
            position: 'Front-End Developer',
            workTitle: '퍼블리싱 및 프론트엔드 개발',
            workLists: [
                {
                    list: '라이브 퀴즈쇼 문제 셋팅 페이지 프론트 개발'
                },
                {
                    list: 'React-Redux로 동기적 state 관리'
                },
                {
                    list: 'Redux-Saga로 API 비동기적 통신'
                },
                {
                    list: 'Tools: HTML // SCSS // JS, jQuery // React, React-Redux, Redux-Saga'
                }
            ],
            date: '2018.04 - 2018.08 | 서울시 마포구'
        },
        {
            num: 3,
            image: 'reconers.png',
            company: 'Reconers',
            link: 'https://www.reconers.com',
            position: 'Publisher',
            workTitle: '퍼블리싱 및 프론트엔드 개발',
            workLists: [
                {
                    list: '퍼블리셔로 처음 웹개발 시작'
                },
                {
                    list: 'PHP 기반으로 된 다수의 프로젝트 퍼블리싱'
                },
                {
                    list: 'Tools: HTML // CSS // JS, jQuery // PHP'
                }
            ],
            date: '2017.02 - 2017.09 | 서울시 강남구'
        },
    ];

    return (
        <>
            {contents.map((content, i) => {
                return (
                    <div className="content-wrap card" key={i}>
                        <div className="body-wrap">
                            <div className="title-wrap card-title">
                                <a href={content.link} className="image" target="_blank" rel="noopener" style={{ backgroundImage: 'url(' + require(`../images/${content.image}`) + ')' }} />
                                <a href={content.link} className="teal-text hoverline" target="_blank" rel="noopener">{content.company}</a>
                                {window.innerWidth >= 1200 && 
                                    <span className="tltle role brown-text">{content.position}</span>
                                }
                            </div>
                            <div className="text-wrap">
                                <div className="sub-tltle-wrap">
                                {window.innerWidth <= 1200 && 
                                    <span className="tltle role brown-text">{content.position}</span>
                                }
                                    <span className="text grey-text">{content.workTitle}</span>
                                </div>
                                <div className="sub-text-wrap">
                                    <ul className="lists">
                                    {content.workLists.map((workList, i) => {
                                        return (
                                            <li key={i}>{workList.list}</li>
                                        )
                                    })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="date-wrap">
                            <span>{content.date}</span>
                        </div>
                    </div>
                )
            })}
        </>
    )
});

export default Experience;