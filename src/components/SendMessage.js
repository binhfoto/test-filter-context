import React, {Component} from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/dist/locale/en';
import {sendMessage} from '../apis/utils';

export default class SendMessage extends Component {

    constructor(props) {
        super(props);
        this._message = {
            setFilterContext: []
        };
        this.state = {
            message: {
                setFilterContext: []
            }
        }
    }

    placeHolder = {
        setFilterContext: [{
            "label": "snapshot.aag81lMifn6q",
            "type": 'date',
            "from": '2010-04-01',
            "to": '2010-12-31'
        }, {
            "label": "label.stage.name.stagename",
            "value": "Short List"
        }, {
            "label": "label.stage.name.stagename",
            "value": "Closed Won"
        }]
    };

    handleChange = ({jsObject}) => {
        if (jsObject) {
            //this.setState({message: jsObject});
            this._message = jsObject;
        }
    };

    handleSend = () => {
        sendMessage(this._message);
        //sendMessage(this.state.message);
    };

    render() {
        return (
            <div className='send-message'>
                <JSONInput
                    id='json-message-input'
                    placeholder={this.placeHolder}
                    theme='light_mitsuketa_tribute'
                    locale={locale}
                    height='400px'
                    onChange={this.handleChange.bind(this)}
                />
                <button onClick={this.handleSend.bind(this)}>Send Message</button>
            </div>
        );
    }
}

