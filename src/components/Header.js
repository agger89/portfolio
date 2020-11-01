import React, { memo, useState, useEffect } from 'react';
import $ from 'jquery';
import { throttle } from 'lodash';

const Header = memo(() => {

    const experience = React.createRef();
    const project = React.createRef();
    const skills = React.createRef();
    const contact = React.createRef();

    const menus = [
        {
            className1: 'cyan-text menu2',
            className2: 'mdi-action-trending-up',
            text: 'Experience',
            ref: experience,
        },
        {
            className1: 'indigo-text menu3',
            className2: 'mdi-av-web',
            text: 'Projects',
            ref: project,
        },
        {
            className1: 'purple-text menu4',
            className2: 'mdi-av-equalizer',
            text: 'Skills',
            ref: skills,
        },
        {
            className1: 'brown-text menu6',
            className2: 'mdi-content-mail',
            text: 'Contact',
            ref: contact,
        },
    ]
    const [activeMenu, setActiveMenu] = useState(false);
    const handleMenuTrue = () => {
        setActiveMenu(true)
    }
    const handleMenuFalse = () => {
        setActiveMenu(false)
    }

    // click scroll event
    const _handleSectionMove = (index, type) => {
        let offset = $("#" + index);
        let offsetTop = offset.offset();

        if (type === 'name-wrap') {
            $('html, body').animate({ scrollTop: 0 }, 300);
        } else {
            if (window.innerWidth <= 1200) {
                $('html, body').animate({ scrollTop: offsetTop.top - 57 }, 300);
            } else {
                $('html, body').animate({ scrollTop: offsetTop.top + 1 }, 300);
            }
        }
        if (window.innerWidth <= 1200) {
            setActiveMenu(false)
        }
    }

    // scroll event
    const _handleScroll = throttle(() => {
        $('.target').each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 300) {
                var id = $(this).attr('id');
                $('.menu-wrap ul li').removeClass('active');
                $('.menu-wrap ul li.menu' + id + '').addClass('active');
            }
        });
    }, 500);

    // click event
    const _handleClick = () => {
        $('.menu-wrap ul li').on('click', function (event) {
            $(this).find('li').removeClass('active');
            $(this).addClass('active');
        });
    };

    useEffect(() => {
        window.addEventListener('click', _handleClick);
        window.addEventListener('scroll', _handleScroll);
        return () => {
            window.removeEventListener('scroll', _handleScroll);
        }
    }, []);

    return (
        <>
            <nav className="header">
                <a href="javascript:void(0)" className="menu-button" onClick={handleMenuTrue}>
                    <i className="mdi-navigation-menu" />
                </a>
                <div className="name-wrap" onClick={(e) => _handleSectionMove(false, "name-wrap")}>
                    <a href="javascript:void(0)" className="teal-text">조충은</a>
                    <span className="brown-text">Front-End Developer</span>
                </div>
            </nav>
            <nav className={`menu-wrap ${activeMenu ? 'active' : ''}`}>
                <ul>
                    {menus.map((menu, i) => {
                        return (
                            <li
                                className={`${menu.className1}`}
                                onClick={() => _handleSectionMove(i, menu.className1)}
                                ref={menu.ref}
                                key={i}
                            >
                                <i className={`small ${menu.className2}`} />
                                <span>{menu.text}</span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <span className={`menu-bg ${activeMenu ? 'active' : ''}`} onClick={handleMenuFalse} />
        </>
    )
});

export default Header;