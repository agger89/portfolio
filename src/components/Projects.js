import React, { memo, useState } from 'react';

const Projects = memo(() => {
    const projects = [
        {
            num: 1,
            image: 'aipe.png',
            title: 'aipe',
            text: 'aipe 코인 및 회사소개 사이트',
            workLists: [
                {
                    list: <span><b>Creact React App 2.0</b>으로 프로젝트 생성 후 개발</span> 
                },
                {
                    list: <span><b>react-intl</b> 패키지로 언어 적용</span>
                },
                {
                    list: <span><b>SCSS</b> 를 이용하여 <b>HTML</b> 스타일링</span>
                },
            ],
            link1: 'https://www.aipe.io',
            link2: '',
        },
        {
            num: 2,
            image: '3piks.png',
            title: '3piks',
            text: 'ai를 이용한 코인 예측 사이트',
            workLists: [
                {
                    list: <span><b>Creact React App</b>으로 프로젝트 생성 후 개발</span> 
                },
                {
                    list: <span><b>React-Redux</b>로 데이터 통신 및 관리</span>
                },
                {
                    list: <span><b>SCSS</b> 를 이용하여 <b>HTML</b> 스타일링</span>
                }
            ],
            link1: 'https://www.3piks.com',
            link2: '',
        },
        {
            num: 3,
            image: 'reactPortfolio.png',
            title: '개인 프로젝트',
            text: 'react로 만든 Instagram 사이트',
            workLists: [
                {
                    list: '기능 - 팔로우, 언팔로우, 댓글 등록, 좋아요'
                },
                {
                    list: <span>프론트 - <b>HTML, SCSS, React, React-Redux</b></span> 
                },
                {
                    list: <span>배포 - <b>firebase</b></span>
                },
            ],
            link1: 'https://instareact-25862.firebaseapp.com',
            link2: 'https://github.com/agger89/portfolioREACT',
        },
        {
            num: 4,
            image: 'puff.png',
            title: '퍼프(PUFF) - 모바일 라이브',
            text: '라이브 퀴즈쇼 및 라이브 방송 하이브리드 앱',
            workLists: [
                {
                    list: <span><b>React</b>로 라이브 퀴즈쇼 프론트 개발 <b>(WebView)</b></span>
                },
                {
                    list: <span><b>React-Redux, Redux-Saga</b>로 비동기처리 및 데이터 관리</span>
                },
                {
                    list: <span><b>SCSS</b>를 이용하여 <b>HTML</b> 스타일링</span>
                },
            ],
            link1: 'https://itunes.apple.com/kr/app/%ED%8D%BC%ED%94%84-puff-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EB%9D%BC%EC%9D%B4%EB%B8%8C/id1227663743?mt=8',
            link2: '',
        },
        {
            num: 5,
            image: 'phpPortfolio.png',
            title: '개인 프로젝트',
            text: 'php 기반으로 만든 Instagram 사이트',
            workLists: [
                {
                    list: '기능 - 회원가입, 로그인, 팔로우, 언팔로우, 글 등록, 글 삭제, 댓글 등록, 댓글 삭제, 좋아요, 이미지 업로드, 프로필 변경, 유저 활동 실시간 알림'
                },
                {
                    list: <span>프론트 - <b>HTML, SCSS, Javascript, jQuery</b></span> 
                },
                {
                    list: <span>백엔드 - <b>PHP, MySQL</b></span>
                },
                {
                    list: <span>배포 - <b>cafe24</b></span>
                },
                {
                    list: <span>루트계정 - ID: <b>root@gmail.com</b> / PW: <b>11111111</b></span>
                },
            ],
            link1: 'http://whcnddms1.cafe24.com',
            link2: 'https://github.com/agger89/portfolioPHP',
        },
        {
            num: 6,
            image: 'travelmap.png',
            title: 'TRAVELMAP',
            text: '전세계 호텔, 항공, 렌터카, 여행 가격비교 사이트',
            workLists: [
                {
                    list: <span><b>PHP</b> 기반의 사이트 퍼블리싱 작업</span>
                },
                {
                    list: <span><b>Javascript, jQuery</b>를 이용하여 데이터 통신 및 동적 효과 구현</span>
                },
                {
                    list: <span><b>CSS</b>를 이용하여 <b>HTML</b> 스타일링</span>
                }
            ],
            link1: 'http://www.travelmap.co.kr',
            link2: '',
        },
        {
            num: 7,
            image: 'mobileappliance.png',
            title: 'Mobile Appliance',
            text: '자동차 솔루션 기업 사이트',
            workLists: [
                {
                    list: <span><b>PHP</b> 기반의 사이트 퍼블리싱 작업</span>
                },
                {
                    list: <span><b>Javascript, jQuery</b>를 이용하여 데이터 통신 및 동적 효과 구현</span>
                },
                {
                    list: <span><b>CSS</b>를 이용하여 <b>HTML</b> 스타일링</span>
                }
            ],
            icon1: 'NOICON',
            icon2: 'NOICON',
            link1: 'http://www.mobileappliance.co.kr',
            link2: '',
        },
        {
            num: 8,
            image: 'pontus.png',
            title: 'PONTUS',
            text: '블랙박스 소개 및 고객센터 사이트',
            workLists: [
                {
                    list: <span><b>PHP</b> 기반의 사이트 퍼블리싱 작업</span>
                },
                {
                    list: <span><b>Javascript, jQuery</b>를 이용하여 데이터 통신 및 동적 효과 구현</span>
                },
                {
                    list: <span><b>CSS</b>를 이용하여 <b>HTML</b> 스타일링</span>
                }
            ],
            link1: 'http://www.pontus.co.kr',
            link2: '',
        },
        {
            num: 9,
            image: 'sarahan.png',
            title: 'Sarahan',
            text: '화장품 소개 및 판매 사이트',
            workLists: [
                {
                    list: <span><b>PHP</b> 기반의 사이트 퍼블리싱 작업</span>
                },
                {
                    list: <span><b>Javascript, jQuery</b>를 이용하여 데이터 통신 및 동적 효과 구현</span>
                },
                {
                    list: <span><b>CSS</b>를 이용하여 <b>HTML</b> 스타일링</span>
                }
            ],
            link1: 'http://www.sarahan.kr',
            link2: '',
        },
        {
            num: 10,
            image: 'dental.png',
            title: '문치과병원',
            text: '병원소개 및 예약 사이트',
            workLists: [
                {
                    list: <span><b>PHP</b> 기반의 사이트 퍼블리싱 작업</span>
                },
                {
                    list: <span><b>Javascript, jQuery</b>를 이용하여 데이터 통신 및 동적 효과 구현</span>
                },
                {
                    list: <span><b>CSS</b>를 이용하여 <b>HTML</b> 스타일링</span>
                }
            ],
            link1: 'http://www.moondh.co.kr',
            link2: '',
        },
        {
            num: 11,
            image: 'kwhoney.png',
            title: '자연에 쉼',
            text: '벌꿀소개 및 판매 사이트',
            workLists: [
                {
                    list: <span><b>PHP</b>기반의 사이트 퍼블리싱 작업</span>
                },
                {
                    list: <span><b>Javascript, jQuery</b>를 이용하여 데이터 통신 및 동적 효과 구현</span>
                },
                {
                    list: <span><b>CSS</b>를 이용하여 <b>HTML</b> 스타일링</span>
                }
            ],
            link1: 'http://www.kwhoney.kr',
            link2: '',
        },
    ];

    const [activeTransform, setActiveTransform ] = useState(false)
    const handleTransformShow = (type) => {
        setActiveTransform(type)
    }
    const handleTransformHide = () => {
        setActiveTransform(false)
    }
    return (
        <>
            <div className="row">
                {projects.map((project, i) => {
                    return (
                        <div className="col s12 m6 l4" key={i}>
                            <div className="card medium">
                                <div className="card-image waves-effect waves-block waves-light" style={{ backgroundImage: 'url(' + require(`../images/${project.image}`) + ')' }} onClick={() => handleTransformShow(project.num)} />
                                <div className="card-content">
                                    <span className="card-title activator teal-text">
                                        {project.title}<i className="mdi-navigation-more-vert right" onClick={() => handleTransformShow(project.num)} />
                                    </span>
                                    <p>{project.text}</p>
                                </div>
                                <div className={`card-reveal ${activeTransform === project.num ? 'active' : ''}`}>
                                    <span className="card-title brown-text">
                                        Accomplishments<i className="mdi-navigation-close right" onClick={handleTransformHide} />
                                    </span>
                                    <ul>
                                        {project.workLists.map((workList, i) => {
                                            return (
                                                <li key={i}>{workList.list}</li>
                                            )
                                        })}
                                    </ul>
                                    <div className="card-action">
                                        <a href={project.link1} target="_blank" rel="noopener" data-title="View Online" className="btn-floating btn-large waves-effect waves-light brown">
                                            <i className="fa fa-external-link" />
                                        </a>
                                        {project.link2 !== '' &&
                                            <a href={project.link2} target="_blank" rel="noopener" data-title="View Source" className="btn-floating btn-large waves-effect waves-light brown">
                                                <i className="fa fa-github" />
                                            </a>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
});

export default Projects;