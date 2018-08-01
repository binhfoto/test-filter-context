import '../styles/main.css';
import React from 'react';
import SendMessage from './SendMessage';
import WebContent from './WebContent';
import LogMessage from './LogMessage';

export default function TestMessage () {
    let isParent = window.self === window.top;
    return (
        <div className='test-message-container'>
            <div className='handle-message-container'>
                <SendMessage/>
                <LogMessage/>
            </div>
            {
                isParent &&
                <div className='web-content-container'>
                    <WebContent/>
                </div>
            }
        </div>
    );
}