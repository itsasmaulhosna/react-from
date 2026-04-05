import React from 'react';
import Granpa from './Granpa';
import './FamilyTree.css'
const FamilyTree = () => {
    return (
        <div className='family-tree'>
            <h3>This is Family Tree</h3>
            <Granpa></Granpa>
        </div>
    );
};

export default FamilyTree;