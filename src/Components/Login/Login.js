import React, {useState} from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import firebase from '../../api/firebase';
import {useAuthContext} from '../../context/auth-context';
//import AuthContext from '../../context/auth-context';
import './Login.css';

const Login = (props) => {

    // useState hooks 
    const [formData, setFormData] = useState({
        dataFields: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter email',
                    label: 'Email',
                },
                value: '',
                validationRules:{
                    required: true,
                    validString: true,
                    mustHaveBeenRegistered: true,
                },
                valid: false,
                touched: false,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter password',
                    label: 'Password',
                },
                value: '',
                validationRules: {
                    required: true,
                    mustMatch: true,
                },
                valid: false,
                touched: false,
            }
        },
        validDataEntered: false,
    });
    const [validationError, setValidationError] = useState('');
    const [loading, setLoading] = useState(false);
    const {user, setUser} = useAuthContext();
   
    // Hackerrank api problem solved.
    const getTotalGoals = async (year, team) => {
        const BaseURL = 'https://jsonmock.hackerrank.com/api/football_matches';
        const resJson = await fetch(`${BaseURL}?year=${year}&team1=${team}`);
        const res = await resJson.json();
        // console.log(res.total_pages);
        let totalGoals = 0;
        for(let i=1;i<=res.total_pages;i++){
            const responseJson = await fetch(`${BaseURL}?year=${year}&team1=${team}&page=${i}`);
            const response = await responseJson.json();
            for(let j=0;j<response.data.length;j++){
                // console.log(parseInt(response.data[j]['team1goals']));
                totalGoals += parseInt(response.data[j]['team1goals']);
            }
        }
        
        for(let i=1;i<=res.total_pages;i++){
            const responseJson = await fetch(`${BaseURL}?year=${year}&team2=${team}&page=${i}`);
            const response = await responseJson.json();
            for(let j=0;j<response.data.length;j++){
                // console.log(parseInt(response.data[j]['team1goals']));
                totalGoals += parseInt(response.data[j]['team2goals']);
            }
        }

        // const Http = new XMLHttpRequest();
        // const url = `${BaseURL}?year=${year}&team1=${team}&page=1`;
        // Http.open("GET", url);
        // Http.send();
        // Http.onreadystatechange = (e) => {
        //     console.log(Http.response);
        // }
    }

    // validate the input
    const validated = ( value, rules ) => {
        let isValid = true;
        if(rules && rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.validString){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
            isValid = re.test(String(value).toLowerCase());
        }
        return isValid;
    }

    const continueAsGuest = () => {
        props.history.push('/search-and-result')
    }

    // handle input
    const inputChangeHandler = (event, inputIdentifier) => {
        const updatedDataFields = {...formData.dataFields};
        const updatedField= {...updatedDataFields[inputIdentifier]};
        updatedField.value = event.target.value;

        updatedField.valid = validated(updatedField.value, updatedField.validationRules);
        updatedField.touched = true;
        updatedDataFields[inputIdentifier] = updatedField;

        let formDataIsValid = true;
        for(let inputIdentifier in updatedDataFields){
            formDataIsValid = updatedDataFields[inputIdentifier].valid && formDataIsValid;
        }
        setFormData({dataFields: updatedDataFields, validDataEntered: formDataIsValid});
    }

    // handle Login button click
    const loginButtonHandler = async (event) => {
        event.preventDefault();
        if(formData.dataFields.email.value === "" && formData.dataFields.password.value === ""){
            setValidationError("Please, enter username/passoword to log in.");
        } else{
            if(formData.validDataEntered){
                setLoading(true);
                //const userJson = await fetch(`https://restaurant-app-users-default-rtdb.firebaseio.com/users.json`);
                //const user = await userJson.json();
                const users = await firebase.get(`/users.json`);
                const userArray = [];
                for(let key in users.data){
                    userArray.push([users.data[key]]);
                }
                let validUser = false;
                let userFirstName = null;
                let userLastName = null;
                for(let i=0;i<userArray.length;i++){
                    if((userArray[i][0].username === formData.dataFields.email.value) && 
                        (userArray[i][0].password === formData.dataFields.password.value)){
                            validUser = true;
                            userFirstName = userArray[i][0].firstName;
                            userLastName = userArray[i][0].lastName;
                        }
                }
                
                if(validUser){
                    const loggedInUser = {
                        name: userFirstName + ' ' + userLastName,
                        username: formData.dataFields.email.value,
                        authenticated: true,
                    }

                    setUser(() => {
                        return loggedInUser;
                    });

                    props.history.push('/search-and-result')
                } else {
                    setValidationError("Email/password was wrong.");
                    setLoading(false);;
                }

            }
        }

        // This is for the api problem on Hackerrank
        //getTotalGoals(2011, 'Ac Milan');

    }

    // handler Register button click
    const registerClickHandler = () => {
        console.log('inside register component')
        props.history.push('/register');
    };

    const dataFieldsArray = [];
    for(let key in formData.dataFields){
        dataFieldsArray.push({
            id: key,
            config: formData.dataFields[key]
        });
    }


    let form =  ( 
        <form className="Form" onSubmit = {(event) => loginButtonHandler(event)}>
            {dataFieldsArray.map(formElement => {
                return(
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        touched={formElement.config.touched}
                        valueType={formElement.id}
                        changed={(event) => inputChangeHandler(event, formElement.id)}
                    />
                )
            })}

            <Button>Login</Button>
            <p className="LoginValidationError">{validationError}</p>
        </form>
    )
    
    // return statement
    return (
        <>
        {loading ? <Spinner /> : (
            <>
                <div className="Login">
                    <p className="LoginText">Login</p>
                    {form}
                    <div className="NotRegistered">
                        <p className="RegisterText">Not Registered Yet?</p>
                        <p 
                            className="RegisterText"
                            onClick={registerClickHandler}>Register</p>
                    </div>
                </div>
                <p 
                    className="Guest" 
                    onClick={continueAsGuest}>Continue as guest
                </p>
            </>
            )}
        </>
    )
}

export default Login;