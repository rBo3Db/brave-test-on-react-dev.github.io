import React from 'react';
import InputMask from 'react-input-mask';
import { Loader } from './Loader';
import { Popup } from './Popup';

export class PayPage extends React.Component {
    constructor() {
        super();
        this.changeLoaderState = this.changeLoaderState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        operator: '',
        isLoaderShow: false
    }
    componentDidMount () {
        const { name } = this.props.match.params;
        this.setState({operator: name})
        console.log(this.props)
    }
    changeLoaderState(newIsShownState) {
        this.setState({
            ...this.state,
            isLoaderShow: newIsShownState
        });
    }
    showPopup() {

    }
    handleSubmit(event) {
        event.preventDefault();
        const responseTime = Math.round(Math.random() * 5) * 1000;
        console.log(responseTime);
        this.changeLoaderState(true);
        new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.round(Math.random()) ? resolve() : reject(new Error())
            }, responseTime)
        })
        .then(
            result => {
                this.changeLoaderState(false);
                console.log('success')},
            error => {
                this.changeLoaderState(false);
                console.log('failure')
            }
        );
    }
    render() {
        return(
            <div>
                <Loader isShown = {this.state.isLoaderShow}/>
                <Popup />
                <h1>
                    Pay for {this.state.operator} 
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Please enter phone number</label>
                    <InputMask
                        id="phoneNumber"
                        type="tel"
                        placeholder="Phone number" 
                        name="phone"
                        pattern="^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$"
                        title="+7 (999) 999 99 99"
                        mask="+7 (999) 999 99 99"
                        required
                    />
                    <label>Please enter payment amount</label>
                    <InputMask
                        id="paymentAmount"
                        type="num"
                        placeholder="Payment amount" 
                        name="money"
                        pattern="^\d{1,3}$|^1000$"
                        title="from 1 to 1000"
                        mask="9999"
                        maskChar=""
                        required
                    />
                    <button type="submit">Continue</button>
                </form>
            </div>
        )
    }
}