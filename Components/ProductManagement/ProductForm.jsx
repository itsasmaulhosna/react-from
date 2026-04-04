import React, { useState } from 'react';

const ProductForm = ({handlePriduct}) => {
    const[error,setError]=useState('')
    const handleProduct=e=>{
        e.preventDefault()
        const name=e.target.name.value
         const price=e.target.price.value
          const quantity=e.target.quantity.value
        //   console.log(name,price,quantity)

        if(name.length===0){
            setError('Please provide a name')
            return
        }
        else if(price.length===0){
            setError('Please provide a price')
            return
        }
        else if(price<0){
            setError('Price can not be negative')
            return
        }
        else{
            setError('')
            
        }
        const newProduct={
            name,
            price,
            quantity
        }
        // console.log(newProduct)
        handlePriduct(newProduct)
    }
    return (
        <div>
            <h3>Add to Product</h3>
            <form onSubmit={handleProduct}>
                <input type='text' name='name' placeholder='name'/>
                <br></br>
                <input type='text' name='price' placeholder='product price'/>
                <br>
                </br>
                <input type='text' name='quantity' placeholder='product quantity'/>
                <br></br>
                <input type='submit' value='submit'/>
            </form>
            <p style={{color:'red'}}>
                <small>{error}
                </small>
                </p>
        </div>
    );
};

export default ProductForm;