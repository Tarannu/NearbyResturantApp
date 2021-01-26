import React, {useState} from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
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
                    type: 'text',
                    placeholder: 'Enter password',
                    label: 'Password',
                },
                value: '',
                secretValue: '',
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

    const [authenticated, setAuthenticated] = useState(false);

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

    const loginHandler = (event) => {
        event.preventDefault();
    }

    // handle input
    const inputChangeHandler = (event, inputIdentifier) => {
        const updatedDataFields = {...formData.dataFields};
        const updatedField= {...updatedDataFields[inputIdentifier]};
        if(inputIdentifier === 'password'){
            updatedField.secretValue = event.target.value;
            let encryptedString = '';
            for(let i=0;i<event.target.value.length; i++){
                encryptedString+= '*';
            }
            updatedField.value = encryptedString;
        } else {
            updatedField.value = event.target.value;
        }

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
    const loginButtonHandler = (event) => {
        event.preventDefault();
        // if(formData.validDataEntered){
        //     console.log('Valid data enetered. Authenticating user...')
        // }
        getTotalGoals(2011, 'Ac Milan');

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
        </form>
    )
    
    // return statement
    return (
        <>
            <div className="Login">
                <p className="LoginText">Login</p>
                {form}
                <div className="NotRegistered">
                    <p>Not Registered Yet?</p>
                    <p 
                        className="RegisterText"
                        onClick={registerClickHandler}>Register</p>
                </div>
            </div>
            <p 
                className="Guest" 
                onClick={continueAsGuest}>Continue as guest</p>
        </>
    )
}

export default Login;