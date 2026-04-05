import React, { createContext } from 'react';
import Granpa from './Granpa';
import './FamilyTree.css'
export const AssetContext=createContext('')
const FamilyTree = () => {
    const asset='diamond'
    const newAsset='gold'
    return (
        <div className='family-tree'>
            <h3>This is Family Tree</h3>
            <AssetContext.Provider value={newAsset}>
                <Granpa asset={asset}></Granpa>
            </AssetContext.Provider>
        </div>
    );
};

export default FamilyTree;