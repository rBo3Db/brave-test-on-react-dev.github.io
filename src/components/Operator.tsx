import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from './Button';

interface IOperatorProps {
    operator: {
        name: string
    }
}

export const Operator = (props: IOperatorProps) => {
    const link = `/payPage/${props.operator.name}`;
    return (
        <Link to={link}>
            <div>
                {props.operator.name}
            </div>
        </Link>
    )
}
