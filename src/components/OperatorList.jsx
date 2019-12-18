import React from 'react';
import {Operator} from './Operator'
import styled from 'styled-components';

class OperatorList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(id) {
        console.log(id);
    }
    render() {
        return (
            <StyledOperatorList>
                {this.props.operators.map((operator) => <Operator key={operator.id} operator={operator} handleClick={this.handleClick}/>)} 
            </StyledOperatorList>
        )
    }
}

export default OperatorList


const StyledOperatorList = styled.div`
padding: 20px;
`
