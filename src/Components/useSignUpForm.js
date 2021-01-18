import {useState} from 'react';


const useSignUpForm = (validate) => {

    const [values,setValues]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const [error,setErrors]=useState({});

  const handleChange=e=>{
      const {name,value}=e.target;
      setValues({
          ...values,
            [name]:value
          //[e.target.name]: e.target.value
      })
      setErrors('');
      
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setErrors(validate(values));

    
    console.log(values.firstName+" last name is "+values.lastName+" email is "+values.email);
    
    values.firstName='';
    values.lastName='';
    values.email='';
    values.password='';
    values.confirmPassword=''
    

}
    return {handleChange,values,handleSubmit,error};
}

export default useSignUpForm;
