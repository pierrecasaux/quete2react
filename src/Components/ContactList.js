import React from 'react';
import Contact from './Contact';

const contactList = [
    {
        avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
        name: 'Johnny May',
        online: true
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/76.jpg",
        name: 'Yvonne Nichols',
        online: true
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        name: 'Jar Frazier',
        online: true
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/81.jpg",
        name: 'Logan Patterson',
        online: false
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/19.jpg",
        name: 'Catherine Gibson',
        online: false
    }
];


const ContactList = () => (
    <div>
        {contactList.map(user => (
            <Contact avatar={user.avatar} name={user.name} online={user.online} />
        ))}
    </div>
)

export default ContactList;