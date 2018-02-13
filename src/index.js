import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Main from './Main';
import './index.css';
import Movies from './components/Movies';
import Movie from './components/Movie';
import registerServiceWorker from './registerServiceWorker';

/**
 * [App: router for the app]
 */
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/movies" render={() => <Movies name="rony" />} />
        <Route path="/movie" component={Movie} />
      </div>
    </Router>
  );
};

/**
 * render output html to div 'root' in index.html file
 */
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
registerServiceWorker();
