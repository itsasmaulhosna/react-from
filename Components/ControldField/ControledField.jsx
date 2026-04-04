import React from 'react';
import { useState } from 'react';

const ControledField = () => {
    const [email,setemail]=useState('')
        const [password,setPassword]=useState('')
        const [error,setError]=useState('')
    const handleSubmit=(e)=>{
e.preventDefault();
    }
    const handleEmailChange=e=>{
        setemail(e.target.value)
    }
    const handleChange=e=>{
        console.log(e.target.value);
        setPassword(e.target.value);
        if(password.length<6){
            setError('Password must be at least 6 characters long');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} defaultValue={email} type='text' name='name' placeholder='Enter your name' required />
                <br />
                <input type='password' name='password' placeholder='Enter your password' onChange={handleChange} defaultValue={password} required />
                <br />
                <input type='submit' value='Submit' />
            </form>
            <p style={{color:'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControledField;