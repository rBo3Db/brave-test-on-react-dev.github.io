import React from 'react';
import { Overlay } from "./Overlay";
import { Button } from './Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export function Popup(props) {
    return ( 
        <Overlay isShown={!!props.apiStatus} id="entire-overlay">
            <PopupContent>
                <StatusText>
                    {props.apiStatus==='success' && 'Your payment was successfull'}
                    {props.apiStatus==='error' && 'Your payment can not be comlited. Please go back and try again'}
                </StatusText>
                    <Link to='/'><Button onClick={props.resetPopupState}>To main page</Button></Link>
                    {props.apiStatus==='error' && <Button onClick={props.resetPopupState}>Back</Button>}
            </PopupContent>
        </Overlay>
    )
}

const StatusText = styled.h2`
    color: white;
`
const PopupContent = styled.div`
    max-width: 400px;
    align-items: center;
    padding 15px;
    display: flex;
    flex-direction: column;
    background-color: #222;
    @media (max-width: 414px) {
        align-self: flex-start;
    }
`