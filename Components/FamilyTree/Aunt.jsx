import React from 'react';
import Cusin from './Cusin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cusin name='Sifa'></Cusin>
                <Cusin name='Hima'></Cusin>
            </section>
        </div>
    );
};

export default Aunt;