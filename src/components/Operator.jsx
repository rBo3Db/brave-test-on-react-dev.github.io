import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Operator = (props) => {
    const link = `/payPage/${props.operator.name}`;
    return (
        <Link to={link}>
            <Button onClick={() => props.handleClick(props.operator.id)}>
                {props.operator.name}
            </Button>
        </Link>
    )
}
