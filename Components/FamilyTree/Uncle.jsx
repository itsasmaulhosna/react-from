import React from 'react';
import Cusin from './Cusin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cusin name='Maya'></Cusin>
                <Cusin name='Mita'></Cusin>
            </section>
        </div>
    );
};

export default Uncle;