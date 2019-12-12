import React from 'react';

export class PayPage extends React.Component {
    state = {
        operator: ''
    }
    componentDidMount () {
        const { name } = this.props.match.params;
        this.setState({operator: name})
    }
    render() {
        return(
            <div>
                <h1>
                    PLATI za {this.state.operator}
                </h1>
                <form>
                    <input>
                    </input>
                </form>
            </div>
        )
    }
}