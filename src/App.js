import React from 'react';
import { connect } from "react-redux";
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
function App(props) {
  let {auth} = props;
  console.log(auth);
  return (<React.Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/templates" exact component={auth.uid ? Templates : SignIn}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/register" exact component={Register}></Route>
            <Route path="/signin" exact component={SignIn}></Route>
            <Route path="/contact" exact component={auth.uid ? Contact : SignIn}></Route>
            <Route path="/education" exact component={auth.uid ? Education : SignIn}></Route>
            <Route path="/finalize" exact component={auth.uid ? Finalize : SignIn }></Route>
            <Route path="/skills" exact component={ auth.uid ? Skills : SignIn}></Route>
            <Route path="/projects" exact component={auth.uid ? Projects : SignIn}></Route>
          </Switch>
          </React.Fragment>);
}
const mapStateToProps = (state) =>{
  // console.log(state);
  return{
    auth : state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);
