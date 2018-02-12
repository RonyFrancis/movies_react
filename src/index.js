import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
import Movies from './components/Movies';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Movies name='rony'  />,
 document.getElementById('root'));
registerServiceWorker();
