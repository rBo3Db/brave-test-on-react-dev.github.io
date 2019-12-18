import React from 'react';
import styled from 'styled-components';

export const Button = (props) => {
    return (
        <AnyButton onClick={props.onClick} {...props}>
           {props.children}
        </AnyButton>
    )
}

// Define our button, but with the use of props.theme this time
const AnyButton = styled.button`
    display: block;
    color: white;
    border: 0px;
    background: palevioletred;
    font-size: 24px;
    margin: 2em 0 1em 0;
    padding: 0.25em 1em;
    border-radius: 3px;
    width: 268px;
    &:hover {
        background-color: black;
        cursor: pointer;
    }
`;