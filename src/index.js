import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Main from './Main';
import './index.css';

// import App from './App';
import Movies from './components/Movies';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//   <Movies name='rony'  />,
//  document.getElementById('root'));

// class App extends Component {
//   render() {
//     return (
//
//      );
//    }
//  }

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/movies" render={() => <Movies name="rony" />} />
      </div>
    </Router>
  );
};

// ReactDOM.render(<App/>, document.getElementById('root'));

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
registerServiceWorker();
