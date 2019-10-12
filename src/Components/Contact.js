import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt="avatar profile" />
            <div>
                <h4 className="name">{props.name}</h4>
                <div className="status">
                    <span className={props.online ? "status-online" : "status-offline"}> </span>
                    <span className="status-text"> {props.online ? 'online' : 'offline'}</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;