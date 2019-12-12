import React from 'react';
import { Link } from 'react-router-dom';

export const Operator = (props) => {
    const link = `/payPage/${props.operator.name}`;
    return (
        <div onClick={() => props.handleClick(props.operator.id)}>
           <Link to={link}>{props.operator.name}</Link>
        </div>
    )
}