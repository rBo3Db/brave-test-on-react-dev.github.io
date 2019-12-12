import React from 'react';

export const Operator = (props) => {
    return (
        <div onClick={() => props.handleClick(props.operator.id)}>
           <p>{props.operator.name}</p>
        </div>
    )
}