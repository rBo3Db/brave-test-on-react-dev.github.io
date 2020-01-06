import React from 'react';
import {Operator} from './Operator'
import styled from 'styled-components';
import {IOperator} from '../models/IOperator';

function OperatorList(props: {operators: IOperator[]}) {
    return (
        <StyledOperatorList>
            {props.operators.map((operator) => <Operator key={operator.id} operator={operator}/>)} 
        </StyledOperatorList>
    )
}

export default OperatorList


const StyledOperatorList = styled.div`
padding: 20px;
`
