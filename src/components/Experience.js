import React, { memo } from 'react';

const Experience = memo(() => {
    const contents = [
        {
            num: 1,
            image: 'linkareer.png',
            company: '링커리어',
            link: 'https://specupad.com',
            position: 'Front-End Developer',
            workTitle: '프론트엔드 개발',
            workLists: [
                {
                    list: 'React-Admin Framework를 이용해 관리자 페이지 클라이언트 개발'
                },
                {
                    list: '기존 html, jquery로 되어있는 클라이언트 페이지 react로 재구현'
                },
                {
                    list: 'apollo-client 이용하여 클라이언트 개발'
                },
                {
                    list: <span>Tools:<b> React, Apollo-Client, Typescript, React Hook, Material-UI</b></span>
                }
            ],
            date: '2019.08 - 2020.12 | 서울시 강남구'
        },
        {
            num: 2,
            image: 'neuralbc.jpg',
            company: 'Neural BC',
            link: 'http://www.neuralbc.com',
            position: 'Front-End Developer',
            workTitle: '프론트엔드 개발',
            workLists: [
                {
                    list: '회사 초기 프로젝트 클라이언트 개발'
                },
                {
                    list: 'redux를 이용한 상태 관리'
                },
                {
                    list: 'react-intl 패키지로 4개 언어 적용'
                },
                {
                    list: <span>Tools: <b>HTML, SCSS, JS, React, React-Redux</b></span>
                }
            ],
            date: '2018.10 - 2019.04 | 서울시 강남구'
        },
        {
            num: 3,
            image: 'starship.jpg',
            company: 'Starship Vending-machine corp.',
            link: 'https://www.insertcoin.me',
            position: 'Front-End Developer',
            workTitle: '퍼블리싱 및 프론트엔드 개발',
            workLists: [
                {
                    list: '라이브 퀴즈쇼 문제 셋팅 페이지 클라이언트 개발'
                },
                {
                    list: 'redux를 이용한 상태 관리'
                },
                {
                    list: 'redux-saga를 이용한 비동기 상태 관리'
                },
                {
                    list: <span>Tools: <b>HTML, SCSS, JS, React, React-Redux, Redux-Saga</b></span>
                }
            ],
            date: '2018.04 - 2018.08 | 서울시 마포구'
        },
        {
            num: 4,
            image: 'reconers.png',
            company: 'Reconers',
            link: 'https://www.reconers.com',
            position: 'Publisher',
            workTitle: '퍼블리싱 및 프론트엔드 개발',
            workLists: [
                {
                    list: '정적 페이지 퍼블리싱'
                },
                {
                    list: 'PHP를 이용해 클라이언트 데이터 연결하여 클라이언트 개발'
                },
                {
                    list: <span>Tools: <b>HTML, JS, jQuery, PHP</b></span>
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