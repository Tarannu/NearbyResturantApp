import React from "react";
import useForm from './useSignUpForm';
import validate from "./validateInfo";

const SignUpForm = () => {
    
const {handleChange,values,handleSubmit,error}=useForm(validate);

  
  return (
    <div className="component-singup-div">
      <form className="component-signup-form" style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <p>
          {" "}
          First Name{" "}
          <input
            type="text"
            placeholder="Enter First Name..."
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            required
          ></input>
        </p>
        {error.firstName && <p className='error-message'>{error.firstName}</p>}
        
        <p>
          {" "}
          Last Name{" "}
          <input
            type="text"
            placeholder="Enter Last Name..."
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            required
          ></input>
          {error.lastName && <p className='error-message'>{error.lastName}</p>}
        </p>
        <p>
          {" "}
          Email{" "}
          <input
            type="email"
            placeholder="email ... "
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          ></input>
          {error.email && <p className='error-message'>{error.email}</p>}
        </p>
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
        <p>
          {" "}
          Confirm Password{" "}
          <input
            type="password"
            placeholder="Confirm Password"
            minlength="8"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            required
          ></input>
          {error.confirmPassword && <p className='error-message'>{error.confirmPassword}</p>}
        </p>
        <p>Password must be eight in charecter length</p>
        <button type="submit" className="signup-button" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
