import React, { memo, useState } from 'react';

const Projects = memo(() => {
    const projects = [
        {
            image: 'passcheck.jpg',
            title: '강사소개 리스트',
            text: '배너 슬라이드와 탭을 이용한 강사소개 리스트',
            workLists: [
                {
                    list: <span>클라이언트<b>(Apollo-Client)</b>, 어드민<b>(React-Admin)</b> 개발</span>
                },
                {
                    list: <span><b>[클라이언트, 어드민 기능]</b> <br />탭별 강사 추가 및 삭제, 강사 순서 변경, 강사 이미지 및 링크 등록 가능</span>
                },
                {
                    list: <span>기술 스택 - <b>React-Admin, React, Apollo-Client, React Hooks, Typescript, Material-UI</b></span> 
                },
            ],
            link1: 'http://next.weport.co.kr/pass-check',
        },
        {
            image: 'passcheck.jpg',
            title: '프리패스 타이머',
            text: '유저에게 수강신청 마감일자와 기수를 보여주는 타이머',
            workLists: [
                {
                    list: <span>클라이언트<b>(Apollo-Client)</b>, 어드민<b>(React-Admin)</b> 개발</span>
                },
                {
                    list: <span><b>[클라이언트, 어드민 기능]</b> <br />기수 자동 업데이트 및 자동 업데이트 멈춤, 타이머 날짜 시간 설정</span>
                },
                {
                    list: <span>기술 스택 - <b>React-Admin, React, Apollo-Client, React Hooks, Typescript, Material-UI</b></span> 
                },
            ],
            link1: 'http://next.weport.co.kr/pass-check',
        },
        {
            image: 'passcheck.jpg',
            title: '실력점검 + 합격예측',
            text: '시험 본 유저가 본인의 정답을 맞춰보고, 시험의 평균점수등을 확인하는 서비스',
            workLists: [
                {
                    list: 'React-Admin Framework를 이용하여 만든 어드민 페이지와 연동되어 데이터 관리가 가능함'
                },
                {
                    list: <span>기술 스택 - <b>React-Admin, React, Apollo-Client, React Hooks, Typescript, Material-UI</b></span> 
                },
            ],
            link1: 'http://next.weport.co.kr/pass-check',
        },
        {
            image: 'nextPortfolio.png',
            title: '개인 프로젝트',
            text: 'React(NextJS)로 만든 twitter 사이트',
            workLists: [
                {
                    list: '기능 - 회원가입, 로그인, 로그아웃, 해시태그 검색, 리트윗, 팔로우, 언팔로우, 글 등록, 글 삭제, 댓글 등록, 좋아요, 이미지 업로드, 닉네임 변경, 이미지 슬라이드, 인피니트 스크롤링, 페이지네이션'
                },
                {
                    list: <span>프론트 - <b>NextJS(SSR), React Hooks, Redux, Redux-Saga, Styled Components, Ant Design</b></span> 
                },
                {
                    list: <span>백엔드 - <b>Node, Express, Sequelize(MySQL)</b></span>
                },
                {
                    list: <span>배포 - <b>AWS(EC2, Lambda, S3, Route53)</b></span>
                },
            ],
            link1: 'http://starcho.com',
            link2: 'https://github.com/agger89/choWitter',
        },
        {
            image: 'aipe.png',
            title: 'aipe',
            text: 'aipe 코인 및 회사소개 사이트 (현재 서비스 중지)',
            workLists: [
                {
                    list: <span><b>Creact React App</b>을 이용해 프로젝트 생성 후 개발</span> 
                },
                {
                    list: <span><b>react-intl</b> 패키지로 언어 적용</span>
                },
                {
                    list: <span><b>SCSS</b> 를 이용하여 <b>마크업</b> 스타일링</span>
                },
            ],
            link1: 'https://www.aipe.io',
            link2: '',
        },
        {
            image: '3piks.png',
            title: '3piks',
            text: 'ai를 이용한 코인 예측 사이트 (현재 서비스 중지)',
            workLists: [
                {
                    list: <span><b>Creact React App</b>을 이용해 프로젝트 생성 후 개발</span> 
                },
                {
                    list: <span><b>redux</b>이용하여 상태 관리</span>
                },
                {
                    list: <span><b>SCSS</b> 를 이용하여 <b>마크업</b> 스타일링</span>
                }
            ],
            link1: 'https://www.3piks.com',
            link2: '',
        },
        {
            image: 'reactPortfolio.png',
            title: '개인 프로젝트',
            text: 'React로 만든 Instagram 사이트',
            workLists: [
                {
                    list: '기능 - 팔로우, 언팔로우, 댓글 등록, 좋아요'
                },
                {
                    list: <span>프론트 - <b>React, SCSS, React-Redux</b></span> 
                },
                {
                    list: <span>배포 - <b>firebase</b></span>
                },
            ],
            link1: 'https://instareact-25862.firebaseapp.com',
            link2: 'https://github.com/agger89/portfolioREACT',
        },
        {
            image: 'puff.png',
            title: '퍼프(PUFF) - 모바일 라이브',
            text: '라이브 퀴즈쇼 하이브리드 앱',
            workLists: [
                {
                    list: <span>문제 셋팅 페이지 프론트 개발 <b>(WebView)</b></span>
                },
                {
                    list: <span><b>React-Redux</b>를 이용하여 상태 관리</span>
                },
                {
                    list: <span><b>Redux-Saga</b>를 이용하여 비동기 상태 관리</span>
                },
                {
                    list: <span><b>SCSS</b>를 이용하여 <b>마크업</b> 스타일링</span>
                },
            ],
            link1: 'https://itunes.apple.com/kr/app/%ED%8D%BC%ED%94%84-puff-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EB%9D%BC%EC%9D%B4%EB%B8%8C/id1227663743?mt=8',
            link2: '',
        },
        {
            image: 'phpPortfolio.png',
            title: '개인 프로젝트',
            text: 'php 기반으로 만든 Instagram 사이트',
            workLists: [
                {
                    list: '기능 - 회원가입, 로그인, 로그아웃, 팔로우, 언팔로우, 글 등록, 글 삭제, 댓글 등록, 댓글 삭제, 좋아요, 이미지 업로드, 프로필 변경, 유저 활동 실시간 알림'
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
                    list: <span><b>CSS</b>를 이용하여 <b>마크업</b> 스타일링</span>
                }
            ],
            link1: 'http://www.travelmap.co.kr',
            link2: '',
        },
        {
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
                    list: <span><b>CSS</b>를 이용하여 <b>마크업</b> 스타일링</span>
                }
            ],
            icon1: 'NOICON',
            icon2: 'NOICON',
            link1: 'http://www.mobileappliance.co.kr',
            link2: '',
        },
        {
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
                    list: <span><b>CSS</b>를 이용하여 <b>마크업</b> 스타일링</span>
                }
            ],
            link1: 'http://www.pontus.co.kr',
            link2: '',
        },
        {
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
                    list: <span><b>CSS</b>를 이용하여 <b>마크업</b> 스타일링</span>
                }
            ],
            link1: 'http://www.sarahan.kr',
            link2: '',
        },
        {
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
                    list: <span><b>CSS</b>를 이용하여 <b>마크업</b> 스타일링</span>
                }
            ],
            link1: 'http://www.moondh.co.kr',
            link2: '',
        },
        {
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
                    list: <span><b>CSS</b>를 이용하여 <b>마크업</b> 스타일링</span>
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
                                <div className="card-image waves-effect waves-block waves-light" style={{ backgroundImage: 'url(' + require(`../images/${project.image}`) + ')' }} onClick={() => handleTransformShow(i + 1)} />
                                <div className="card-content">
                                    <span className="card-title activator teal-text">
                                        {project.title}<i className="mdi-navigation-more-vert right" onClick={() => handleTransformShow(i + 1)} />
                                    </span>
                                    <p>{project.text}</p>
                                </div>
                                <div className={`card-reveal ${activeTransform === i + 1 ? 'active' : ''}`}>
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