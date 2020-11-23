import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Templates from './components/Templates';
import Landing from './components/LandingPage';
import About from './components/About';
import SignIn from './components/Signin';
import Register from './components/Register';
import Contact from './components/Contact';
import Education from './components/Education';
import Finalize from './components/Finalize';
import Skills from './components/Skills';
import Projects from './components/Projects';
//hii  hello from akash
function App() {
  return (<React.Fragment>
          <Header />
          <Switch>
            <Route path="/" exact> 
              <Landing></Landing>
            </Route> 
            <Route path="/templates" exact component={Templates}></Route>
            <Route path="/about" exact>
              <About></About>
            </Route>
            <Route path="/register" exact>
              <Register></Register>
            </Route>
            <Route path="/signin" exact>
              <SignIn></SignIn>
            </Route>
            <Route path="/contact" exact component={Contact}></Route>
            <Route path="/education" exact component={Education}></Route>
            <Route path="/finalize" exact component={Finalize}></Route>
            <Route path="/skills" exact component={Skills}></Route>
            <Route path="/projects" exact component={Projects}></Route>
          </Switch>
          </React.Fragment>);
}

export default App;
