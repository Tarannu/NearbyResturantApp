export default function validateSignIn(values){
    let error={};

    //have to connect to database to match email and password
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(!values.email){
        error.email='Email required';
    } else if (!pattern.test(values.email)){
        error.email="Email address is invalid";
    }
    
    if(!values.password){
        error.password="password is required";
    } else if(values.password.length<8){
        error.password="Password needs to be maximum 8 characters";
    }
    
    
    
    return error;
}