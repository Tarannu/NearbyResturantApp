import React from 'react';
import './Input.css';

const Input = (props) => {
    let inputElement = null;
    let validationError = null;
    const inputClasses = ['InputElement'];

    if(props.invalid && props.touched){
        inputClasses.push('Invalid');
        validationError = <p className="ValidationError">Please enter a valid {props.valueType}</p>
    }

    if(props.valueType === 'confirmPassword' && props.invalid && props.touched){
        validationError = <p className="ValidationError">Password did not match</p>
    }


    switch(props.elementType){
        case('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break;
        case('select'):
            inputElement = (
                <select 
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option =>{
                        return(
                            <option
                                key = {option.value} 
                                value={option.value}>
                                {option.displayValue}
                            </option>
                        )
                    })}
                </select>)
            break;
        default:
    }

    return(
        <div className="Input">
            <label className="Label">{props.elementConfig.label}</label>
            {inputElement}
            {validationError}
        </div>
    )
}

export default Input;