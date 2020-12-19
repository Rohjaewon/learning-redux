import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './routes/Home.js'
import Detail from './routes/Detail.js'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/:id' exact component={Detail} />
    </Router>
  );
}

export default App;
