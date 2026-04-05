import React from 'react';
import Cusin from './Cusin';

const Aunt = ({asset}) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cusin asset={asset} name='Sifa'></Cusin>
                <Cusin name='Hima'></Cusin>
            </section>
        </div>
    );
};

export default Aunt;