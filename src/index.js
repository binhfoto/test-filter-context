import React from 'react';
import ReactDOM from 'react-dom';
import TestMessage from './components/TestMessage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TestMessage />, document.getElementById('root'));
registerServiceWorker();
