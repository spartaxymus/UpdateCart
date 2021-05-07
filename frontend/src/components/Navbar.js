import React from 'react';
import styled from 'styled-components';

function Navbar() {
    return (
        <Nav>
            <Logo href="">
                ROBOT <span> Market</span>
            </Logo>

        </Nav>
    )
}

// Styling for respective elements

const Nav = styled.div`
    background: #ff0080;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    alighn-items: center;
    flex-wrap: wrap;
`;

const Logo = styled.a`
    padding: 1rem 0;
    color: #fff;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;

    span {
        font-weight: 300;
        ont-size: 1.3rem;
    }
    
`;

export default Navbar;
