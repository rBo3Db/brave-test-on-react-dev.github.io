import React from 'react';
import styled from 'styled-components';

const EntireOverlayWrapper = styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000000a1;
    position: fixed;
    display: ${props => props.isShown ? 'flex' : 'none'}
    align-items: center;
    justify-content: center;
    z-index: 10`;

export function Overlay(props) {
    return (
        <EntireOverlayWrapper isShown={props.isShown}>{props.children}</EntireOverlayWrapper>
    )
}