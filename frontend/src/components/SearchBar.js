import React from 'react';
import styled from 'styled-components';

const SearchBar = (props) => {
    return (
        <Search>
            <h2>New Arrivals</h2>
            <SearchInput type="text" placeholder="Search your robot material type..." onChange={(e) => props.onSearch(e.target.value)}
                value={props.value} />
        </Search>
    )
}

// Styling for respective elements

const Search = styled.div`
    display: grid;
    grid-template-columns: 51% 49%;
    justify-content: center;
    align-items: center;
    padding-right: 14px;
    padding-left: 15px;
`;

const SearchInput = styled.input`
    padding: 0.8rem 1.2rem;
    border: 1px solid #808B96;
    border-radius: 20px;
    outline: none;
`;

export default SearchBar;
