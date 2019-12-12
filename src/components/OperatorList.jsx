import React from 'react';
import {Operator} from './Operator'
const operators = [
    {
        "id": 1,
        "name": "MTS",
        "imgUrl": "../assets/MTS_logo_2015.svg" 
    },
    {
        "id": 2,
        "name": "Megafon",
        "imgUrl": "../assets/MTS_logo_2015.svg" 
    },
    {
        "id": 3,
        "name": "Beeline",
        "imgUrl": "../assets/MTS_logo_2015.svg" 
    },
    {
        "id": 4,
        "name": "Tele2",
        "imgUrl": "../assets/MTS_logo_2015.svg" 
    }
]

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
                {operators.map((operator) => <Operator operator={operator} handleClick={this.handleClick}/>)} 
            </div>
        )
    }
}

export default OperatorList