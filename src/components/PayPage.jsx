import React from 'react';
import InputMask from 'react-input-mask';
import { Loader } from './Loader';
import { Popup } from './Popup';
import { Button } from './Button';
import styled from 'styled-components';

export class PayPage extends React.Component {
    constructor() {
        super();
        this.changeLoaderState = this.changeLoaderState.bind(this);
        this.changePopupState = this.changePopupState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetPopupState = this.resetPopupState.bind(this);
    }
    state = {
        operator: '',
        isLoaderShow: false,
        apiStatus: null,
    }
    componentDidMount () {
        const { name } = this.props.match.params;
        this.setState({operator: name})
    }
    changeLoaderState(newIsShownState) {
        this.setState({
            ...this.state,
            isLoaderShow: newIsShownState
        });
    }
    changePopupState(newApiStatus) {
        this.setState({
            ...this.state,
            apiStatus: newApiStatus
        });
    }
    resetPopupState() {
        this.changePopupState(null);
    }
    

    handleSubmit(event) {
        event.preventDefault();
        const responseTime = Math.round(Math.random() * 5) * 1000;
        this.changeLoaderState(true);
        new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.round(Math.random()) ? resolve() : reject(new Error())
            }, responseTime)
        })
        .then(
            result => {
                this.changeLoaderState(false);
                this.changePopupState('success');
            },
            error => {
                this.changeLoaderState(false);
                this.changePopupState('error');
            }
        );
    }
    render() {
        return(
            <PayForm>
                <Loader isShown = {this.state.isLoaderShow}/>
                <Popup
                    apiStatus = {this.state.apiStatus}
                    resetPopupState={this.resetPopupState}    
                />
                <Header>
                    Pay for {this.state.operator} 
                </Header>
                <form onSubmit={this.handleSubmit}>
                    <p>Please enter phone number</p>
                    <InputMask
                        id="phoneNumber"
                        type="tel"
                        placeholder="Phone number" 
                        name="phone"
                        pattern="^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$"
                        title="+7 (999) 999 99 99"
                        mask="+7 (999) 999 99 99"
                        size="18"
                        required
                    />
                    <p>Please enter payment amount</p>
                    <InputMask
                        id="paymentAmount"
                        type="num"
                        placeholder="Payment amount" 
                        name="money"
                        pattern="^\d{1,3}$|^1000$"
                        title="from 1 to 1000"
                        mask="9999"
                        maskChar=""
                        size="18"
                        required
                    />
                    <Button type="submit">Continue</Button>
                </form>
            </PayForm>
        )
    }
}

const PayForm = styled.div`
    background-color: white;
    border: 2px solid black;
    padding: 15px;
    border-radius: 3px;
    display: flex;
    align-content: center;
    flex-direction: column;

`
const Header = styled.h1`
    align-self: center;
    color: palevioletred;
`