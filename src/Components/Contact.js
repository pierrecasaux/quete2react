import React from 'react';
import './Contact.css';

function Contact(props) {
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

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online = false,
        };
    }
    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={props.avatar} alt="avatar profile" />
                <div>
                    <h4 className="name">{props.name}</h4>
                    <div className="status"
                        onClick={event => {
                            const newStatus = !this.state.online;
                            this.setState({ online = newStatus });
                        }}
                    ><span className={props.online ? "status-online" : "status-offline"}> </span>
                        <span className="status-text"> {props.online ? 'online' : 'offline'}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;