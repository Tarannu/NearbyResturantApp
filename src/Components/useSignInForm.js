import {useState} from 'react';



const useSignInForm = (validate) => {

    const [values,setValues]=useState({
        email:'',
        password:'',
    
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

    
    console.log("Sign in  email is "+values.email);
    
    values.email='';
    values.password='';
    
    

}
    return {handleChange,values,handleSubmit,error};
}

export default useSignInForm;
