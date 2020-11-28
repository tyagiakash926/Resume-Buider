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
import { connect } from "react-redux";

//hii  hello from akash
function App(props) {
  let {auth} = props;
  return (<React.Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/templates" exact component={auth ? Templates : SignIn}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/register" exact component={Register}></Route>
            <Route path="/signin" exact component={SignIn}></Route>
            <Route path="/contact" exact component={auth ? Contact : SignIn}></Route>
            <Route path="/education" exact component={auth ? Education : SignIn}></Route>
            <Route path="/finalize" exact component={auth ? Finalize : SignIn }></Route>
            <Route path="/skills" exact component={ auth ? Skills : SignIn}></Route>
            <Route path="/projects" exact component={auth ? Projects : SignIn}></Route>
          </Switch>
          </React.Fragment>);
}
const mapStateToProps = (state) =>{
  return{
    auth : state.auth.isAuth
  }
}

export default connect(mapStateToProps)(App);
