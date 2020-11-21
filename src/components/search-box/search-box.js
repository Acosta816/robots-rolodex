import React from 'react';
import './search-box.css';


export const SearchBox = ({ placeholder, handleTyping }) => {
    return (
        <input
            className="search"
            type='search'
            placeholder={placeholder}
            onChange={(e) => handleTyping(e)}
        />
    );
};