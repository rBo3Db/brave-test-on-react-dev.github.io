import React from 'react';
import styled, { keyframes } from 'styled-components';
import {Overlay} from "./Overlay"

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    `;

const Rotate = styled.div`
    display: white;
    margin: auto;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
    `;

interface ILoaderProps {
    isShown: boolean
}

export function Loader(props: ILoaderProps) {
    return (
        <Overlay isShown={props.isShown}>
            <Rotate>Loading...</Rotate>
        </Overlay>
    )
}

