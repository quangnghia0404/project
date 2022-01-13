import React from 'react';
import Navbar from './components/header/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UniqueFeatures from './components/pages/UniqueFeatures';
import Roadmaps from './components/pages/Roadmaps';
import Market from './components/pages/Market';
import SignUp from './components/pages/SignUp';
import PVP from './components/pages/PVP';
import PVE from './components/pages/PVE';
import About from './components/pages/About';
import NotFound from './components/pages/mainpages/notfound/Notfound'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/uniquefeatures' component={UniqueFeatures} />
        <Route path='/roadmap' component={Roadmaps} />
        <Route path='/about' component={About} />
        <Route path='/market' component={Market} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/PVP' component={PVP} />
        <Route path='/PVE' component={PVE} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
