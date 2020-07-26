import React from 'react';


const inputStyle = {
    padding:'8px',
    borderRadius: '5px',
    marginBottom: '20px',
    backgroundColor: '#8f32a8',
    color:'#fff',
    outline:'none'
}

const search = ({searchField, searchChange}) => {
    return(
        <div>
            <input style={inputStyle} type='search' placeholder='Search . . ' 
            onChange={searchChange} />
        </div>
    );
}

export default search;