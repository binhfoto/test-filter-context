import React, {Component} from 'react';
import {registerMessage} from '../apis/utils';

export default class LogMessage extends Component {

    state = {
        messages: []
    };

    updateMessage = (message) => {
        let {messages} = this.state;
        let _messages = [...messages];
        if (messages.length === 5) {
            _messages = messages.slice(0, messages.length - 1);
        }
        this.setState({
            messages: [
                message,
                ..._messages
            ]
        })
    };

    formatMessage = (item) => {
        const {label, value = '', type = '', from = '', to = ''} = item;
        if (type === 'date') {
            return <div>{`${label}|${from}|${to}`}</div>;
        }
        return <div>{`${label}|${value}`}</div>;
    };
    
    formatMessages = (message) => {
        return message.map(this.formatMessage);
    };
    
    componentDidMount() {
        registerMessage(this.updateMessage);
    }

    render () {
        return (
            <div>
                <h3>Log new incoming messages on top</h3>
                <h5>Only log 5 latest messages</h5>
                <div className='log-message'>
                    {this.state.messages.map(message => {
                        return (
                            <div className='incoming-message'>
                                {this.formatMessages(message)}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}