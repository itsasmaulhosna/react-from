import React from 'react';
import Special from './Special';

const Cusin = ({name,asset}) => {
    return (
        <div>
           <h3>{name}</h3> 
           {
            name==='Sifa' && <Special asset={asset}></Special>
           }
        </div>
    );
};

export default Cusin;