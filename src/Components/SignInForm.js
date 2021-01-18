import React from "react";
import useForm from './useSignUpForm';
import validate from './validateSignIn';


const SignInForm = () => {
    
const {handleChange,values,handleSubmit,error}=useForm(validate);

  
  return (
    <div className="component-singup-div">
      <form className="component-signup-form" style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <p>
          {" "}
          Email{" "}
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          ></input>
        </p>
        {error.firstName && <p className='error-message'>{error.email}</p>}
        
        
        <p>
          {" "}
          Password{" "}
          <input
            type="text"
            type="password"
            placeholder="Password"
            name="password"
            minlength="8"
            value={values.password}
            onChange={handleChange}
            required
          ></input>
          {error.password && <p className='error-message'>{error.password}</p>}
        </p>
        
        <button type="submit" className="signup-button" onClick={handleSubmit}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
