import React, {Component} from 'react';
import {debounce} from '../apis/utils'


export default class WebContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: localStorage.getItem('web-content-url') || 'about:blank',
            key: 0
        };
        this.debounce = debounce(this.handleChange, 500).bind(this);
    }

    handleChange = () => {
        const url = this.url.value;
        localStorage.setItem('web-content-url', url);

        this.setState({
            url,
            key: this.state.key + 1
        });
    };

    render() {
        return (
            <div className='web-content'>
                <input type='text' onChange={this.debounce} ref={ele => this.url = ele} defaultValue={this.state.url}/>
                <iframe id='web-content' src={this.state.url} key={this.state.key}/>
            </div>
        );
    }
}