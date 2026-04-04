import React from 'react';
import useInputhooks from '../../hooks/useInputhooks';

const HookForm = () => {
    const [name,nameOnChange]=useInputhooks('')
    const [email,emailOnChange]=useInputhooks('')
    const handleSubmit=e=>{
        e.preventDefault()
        console.log('submit',name,email)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={nameOnChange} defaultValue={name}/>
                <br></br>
                <input type='email' onChange={emailOnChange} defaultValue={email}/>
                <br></br>
                <input type='submit' value='submit'/>
            </form>
        </div>
    );
};

export default HookForm;