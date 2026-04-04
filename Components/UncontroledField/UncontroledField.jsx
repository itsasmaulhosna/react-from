import React, {  useRef } from 'react';

const UncontroledField = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('')

    const handleSubmit= e=>{
        e.preventDefault();
        console.log(emailRef.current.value);
        const email=emailRef.current.value;
        console.log(passwordRef.current.value)
       const password=passwordRef.current.value;
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
               <input ref={emailRef} type='email' name='' />
               <br></br>
               <input ref={passwordRef} type='password' name=''/>
               <br></br>
               <input type='submit'/>

            </form>
        </div>
    );
};

export default UncontroledField;