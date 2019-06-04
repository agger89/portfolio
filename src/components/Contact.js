import React, { memo } from 'react';

const Contact = memo(() => {
    const contacts = [
        {
            link: 'mailto:agger2154@gmail.com',
            title: 'mail',
            text: 'agger2154@gmail.com',
            fontAwesome: 'fa-envelope',
            dataTitle: 'Send E-mail'
        },
        {
            link: 'https://github.com/agger89',
            title: 'github',
            text: 'github.com/agger89',
            fontAwesome: 'fa-github',
            dataTitle: 'View Github'
        }
    ]
    return (
        <>
            {contacts.map((contact, i) => {
                return (
                    <p className="contact-wrap" key={i}>
                        <a href={contact.link} data-title={contact.dataTitle} target={contact.title === 'mail' ? '_self': '_blank'} className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                            <i className={`fa ${contact.fontAwesome}`} />
                        </a>
                        <a href={contact.link} target={contact.title === 'mail' ? '_self': '_blank'} className="hoverline">{contact.text}</a>
                    </p>
                )
            })}
        </>
    )
});

export default Contact;