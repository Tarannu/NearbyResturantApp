import React from 'react';
import {useAuthContext} from '../context/auth-context';

const Logout = (props) => {
    const style = {
        color: 'navy', 
        float: 'right',
        padding: '10px',
        marginRight: '20px',

    }

    const handleClick = () => {
        console.log("Logged out");
        console.log(props)
        // props.history.push('/home')
    }
    const {user} = useAuthContext();
    return (
        <div style={style}>
            <span>{user.name}</span>&emsp;
            <span
                style={{cursor: 'pointer'}}
                onClick={props.handleLogout}>Logout
            </span> 
        </div>
    )
}

export default Logout;