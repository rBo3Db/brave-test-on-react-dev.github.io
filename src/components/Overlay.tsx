import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface IOverlayProps {
    isShown: boolean,
    // id: string;  id="entire-overlay"
    children: ReactElement
}

export function Overlay(props: IOverlayProps) {
    return (
        <EntireOverlayWrapper isShown={props.isShown}>{props.children}</EntireOverlayWrapper>
    )
}

interface WrapperProps {
    isShown: boolean
}

const EntireOverlayWrapper = styled.div<WrapperProps>`
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
