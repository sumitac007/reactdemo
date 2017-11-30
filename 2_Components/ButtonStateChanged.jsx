
import React from 'react';

class Button extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }
    handleClick(){
        this.setState({count: this.state.count  + 1});
    }
    render() {
        // return <button onClick={this.handleClick}> {this.props.caption} </button>;
        return <button onClick={this.handleClick.bind(this)}> {this.props.text} - {this.state.count} </button>;
    }
}

export default Button;