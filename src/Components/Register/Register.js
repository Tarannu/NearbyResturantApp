import React, {useEffect, useState} from 'react';
import Input from '../../components/Input/Input';
import Button from '../Button/Button';
import axios from '../../axios';
import './Register.css';

const Register = (props) => {
    const[validationError, setValidationError] = useState(''); 
    const [formData, setFormData] = useState({
        dataFields: {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your first name',
                    label: 'First Name'
                },
                value: '',
                validationRules: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your last name',
                    label: 'Last Name'
                },
                value: '',
                validationRules: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
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
                secretValue: '',
                validationRules: {
                    required: true,
                    minLength: 8,
                },
                valid: false,
                touched: false,
            },
            confirmPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Re-enter password',
                    label: 'Confirm Password',
                },
                value: '',
                secretValue: '',
                validationRules: {
                    required: true,
                    mustMatch: true,
                },
                valid: false,
                touched: false,
            },
        },
        isFormValid: false,
        authenticated: false,
    })

    // using useEffect hook to register users to the database

    useEffect(() => {
        console.log('inside useEffect');
    },[formData.isFormValid])

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

        if(rules.minLength){
            isValid = value.length >= rules.minLength;
        }

        if(rules.mustMatch){
            isValid = value === formData.dataFields.password.value;
        }
        return isValid;
    }

    // handle signUp button
    const signUpButtonHandler = async (event) => {
        setValidationError('');
        const user = {
            username: formData.dataFields.email.value,
            passoword: formData.dataFields.password.value,
            firstName: formData.dataFields.firstName.value,
            lastName: formData.dataFields.lastName.value,
            email: formData.dataFields.email.value,
        }

        // either sign user up or generate error message
        if(formData.isFormValid){
            axios.get(`/users.json`)
                .then(response => {
                    let alreadySignedUp = false;
                    for(let key in response.data){
                        if(response.data[key].username === user.username){
                            alreadySignedUp = true;
                        }
                    }
                    if(alreadySignedUp === false){
                        axios.post('/users.json', user)
                        .then(response => {
                            console.log(response);
                        });
                    } else{
                        setValidationError('User already exists. Cannot register.');
                    }
                })
        } else{
            setValidationError('Please, complete the form to sign up.');
        }
        event.preventDefault();
    }

    // handle input
    const inputChangeHandler = (event, field) => {
        const updatedDataFields = {...formData.dataFields};
        const updatedField = {...updatedDataFields[field]};
        updatedField.value = event.target.value;

        // validate entered values
        updatedField.valid = validated(updatedField.value, updatedField.validationRules);
        updatedField.touched = true;
        updatedDataFields[field] = updatedField;

        let formDataIsValid = true;
        for(let field in updatedDataFields){
            formDataIsValid = updatedDataFields[field].valid && formDataIsValid;
        }
        setFormData({dataFields: updatedDataFields, isFormValid: formDataIsValid});
    }


    const dataFieldsArray = [];
    for(let key in formData.dataFields){
        dataFieldsArray.push({
            id: key,
            config: formData.dataFields[key],
        });
    }

    let form = 
        <form onSubmit={(event)=>signUpButtonHandler(event)}>
            {dataFieldsArray.map(formElement => {
                return(
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        touched={formElement.config.touched}
                        valueType={formElement.id.includes('Name') ? (formElement.id.substring(0, formElement.id.length-4) + ' ' +  formElement.id.substring(formElement.id.length-4).toLowerCase()) : formElement.id}
                        changed={(event) => inputChangeHandler(event, formElement.id)}
                    />
                )
            })}
            <Button>Sign Up</Button>
        </form>
    return (
        <div className="Register">
            <p className="RegisterTitle">Register for more actions and easy checkouts</p>
            <div className="RegisterPage">
                {form}
                <p className="ValidationError">{validationError}</p>
             </div>
        </div>
        
    )
}

export default Register;