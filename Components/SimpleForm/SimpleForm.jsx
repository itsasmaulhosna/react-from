import React from 'react';

const SimpleForm = () => {
    const handleSubmited=(e)=>{
        e.preventDefault();
        console.log(e.target.name.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmited}>
                <input type='text' name='name' placeholder='Enter your name'>
                </input>
                <br>
                </br>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    );
};

export default SimpleForm;