import React from "react";
import SignUpForm from "../Components/SignUpForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInForm from "../Components/SignInForm";
import NavButton from './NavButton';


//<SignUpForm/>
const SignUp = () => {
  return (
    <Router>
    <div>
      <Route path="/SignIn" exact component={SignIn} />
      <Route path="/SignUpForm" exact component={SignUpForm}/>
      <NavButton/>
    </div>
    </Router>
  );
};
const SignIn = () => {
  return (
    <div>
      <SignInForm />
    </div>
  );
};

export default SignUp;
