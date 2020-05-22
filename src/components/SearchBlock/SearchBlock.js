import React from 'react';
import './SearchBlock.css';
import ItemStatusFilter from '../ItemStatusFilter';

const SearchBlock = ({ onSearch }) => {
    const searchBlockText = 'What are you want to search?'

    const onInput = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className="SearchBlock d-flex ">
            <input
                className="form-control mr-3"
                onChange={onInput}
                type="search"
                placeholder={searchBlockText}
            />
            <ItemStatusFilter />
        </div>
    );
};

export default SearchBlock;