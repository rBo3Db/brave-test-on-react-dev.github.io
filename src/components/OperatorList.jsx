import React from 'react';
import {Operator} from './Operator'

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
            <div>
                {this.props.operators.map((operator) => <Operator key={operator.id} operator={operator} handleClick={this.handleClick}/>)} 
            </div>
        )
    }
}

export default OperatorList